import {
  createContext,
  memo,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export interface AppContextProps {
  api: string;
  selectedLevel: string;
  prompt: (prompt: string) => Promise<string>;
  streamPrompt: (prompt: string) => Promise<ReadableStream<string>>;
}

export const AppContext = createContext<AppContextProps | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw Error("useAppContext must be called inside a AppContextProvider");
  return context;
};

export interface AppProviderProps extends PropsWithChildren {}

const AppContextProvider = memo(({ children }: AppProviderProps) => {
  const api = "http://192.168.1.83:9090"; // à transformer en state
  const [selectedLevel, setSelectedLevel] = useState("1");
  const prompt = useCallback(
    (prompt: string): Promise<string> =>
      fetch(`${api}/prompt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          level: selectedLevel,
          prompt,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response from fast api was not ok when prompting"
            );
          }
          return response.json(); // Parse JSON data from the response
        })
        .then((value) => value)
        .catch((error) => console.log(error)),
    [selectedLevel]
  );

  const streamPrompt = useCallback(async (prompt: string) => {
    const decoder = new TextDecoder();
    const readableStream = await fetch(`${api}/prompt-stream`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        level: "5",
        prompt,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(
          "Network response from fast api was not ok when prompting"
        );
      }
      if (response.body === null) {
        throw new Error("Response body is empty!");
      }
      return response.body;
    });
    return readableStream.pipeThrough<string>(new TextDecoderStream());
  }, []);

  const value = useMemo(
    () => ({
      api,
      selectedLevel,
      prompt,
      streamPrompt,
    }),
    [selectedLevel, prompt, streamPrompt]
  );

  // to be put in a .tsx file!
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
});

export default AppContextProvider;
