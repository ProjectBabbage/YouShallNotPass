import React, {
  createContext,
  memo,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { uid } from "uid";
import { Level } from "@/types/levels";

export interface AppContextProps {
  api: string;
  selectedLevel: string;
  setSelectedLevel: React.Dispatch<React.SetStateAction<string>>;
  getNewUid: () => void;
  streamPrompt: (prompt: string) => Promise<ReadableStream<string>>;
  levels: Level[];
  messages: string[];
  setMessages: React.Dispatch<React.SetStateAction<string[]>>;
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
  const [levels, setLevels] = useState<Level[]>([]);
  const [selectedLevel, setSelectedLevel] = useState("1");
  const [messages, setMessages] = useState<string[]>([]);
  const [userId, setUserId] = useState(uid());
  const getNewUid = useCallback(() => setUserId(uid()), []);

  const streamPrompt = useCallback(
    async (prompt: string) => {
      const readableStream = await fetch(`${api}/prompt-stream`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          level: selectedLevel,
          prompt,
          user_id: userId,
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
    },
    [selectedLevel, userId]
  );

  useEffect(() => {
    fetch(`${api}/levels/`)
      .then((response) => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Network response from fast api was not ok");
        }
        return response.json(); // Parse JSON data from the response
      })
      .then((levels) => {
        console.log("Level fetched", levels);
        setLevels(levels);
      })
      .catch((reason) =>
        console.log("FAILED to request levels : reason ", reason)
      );
  }, [api]);

  const value = useMemo(
    () => ({
      api,
      selectedLevel,
      setSelectedLevel,
      levels,
      getNewUid,
      streamPrompt,
      messages,
      setMessages,
    }),
    [selectedLevel, streamPrompt, messages, setMessages, getNewUid, levels]
  );

  // to be put in a .tsx file!
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
});

export default AppContextProvider;
