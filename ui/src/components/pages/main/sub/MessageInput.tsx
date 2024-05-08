import { useAppContext } from "@/contexts/app.context";
import { PropsWithStyles } from "@/types/styles";
import styled from "@emotion/styled";
import { SyntheticEvent, useState } from "react";

export interface MessageInputProps extends PropsWithStyles {}

export const MessageInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { streamPrompt, setMessages } = useAppContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("inputed:", inputValue);
    setInputValue(""); // Clear input after submit
    setMessages((previous) => [...previous, inputValue, ""]);
    let message = "";
    const tokenStream = await streamPrompt(inputValue);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    for await (const token of tokenStream) {
      // tokenStrem type issue to fix
      message += token;
      setMessages((previous) => {
        const newMessages = [...previous];
        newMessages[newMessages.length - 1] = message;
        return newMessages;
      });
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your prompt"
      />
      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
  );
};

/* ------------- Styled components ------------- */
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 5vh;
  gap: 10px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: #3d3dff;
  font-size: 20px;
  color: white;
  padding: 8px;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  background-color: #f3f3f3;
  padding: 8px;
  color: #333;
  border: 2px solid lightblue;
  border-radius: 10px;
  outline: none;
  width: 80%;
`;
