// Props: onSubmit (function)
// State: inputValue (text of the current prompt)

import { useAppContext } from "@/contexts/app.context";
import { PropsWithStyles } from "@/types/styles";
import styled from "@emotion/styled";
import { SyntheticEvent, useState } from "react";

// Handlers: handleInputChange, handleSubmit
export interface MessageInputProps extends PropsWithStyles {}

export const MessageInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { prompt, streamPrompt } = useAppContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("inputed:", inputValue);
    const tokenStream = await streamPrompt(inputValue);
    for await (const token of tokenStream) {
      console.log(token);
    }

    setInputValue(""); // Clear input after submit
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
  font-size:20px;
  color: white;
  padding: 8px;
  border-radius: 10px;

`;

const StyledInput = styled.input`
  background-color: #f3f3f3; /* Light grey background */
  padding: 8px; 

  color: #333; /* Dark grey text */
  border: 2px solid lightblue; /* Light grey border */
  border-radius: 10px;
  outline: none;
  width: 80%;
`;
