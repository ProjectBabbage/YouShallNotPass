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
`;

const StyledInput = styled.input`
  background-color: #f3f3f3; /* Light grey background */
  color: #333; /* Dark grey text */
  border: 2px solid #ccc; /* Light grey border */
  border-radius: 5px;
  outline: none;
  width: 80%;
`;
