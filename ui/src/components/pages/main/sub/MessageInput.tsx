// Props: onSubmit (function)
// State: inputValue (text of the current prompt)

import { PropsWithStyles } from "@/types/styles";
import styled from "@emotion/styled";
import { useState } from "react";

// Handlers: handleInputChange, handleSubmit
export interface MessageInputProps extends PropsWithStyles {
  onSubmit: (value: string) => void;
}

export const MessageInput = ({ onSubmit }: MessageInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => setInputValue(e.target.value);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(inputValue);
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
