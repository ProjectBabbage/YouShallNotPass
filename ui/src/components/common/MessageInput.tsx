// Props: onSubmit (function)
// State: inputValue (text of the current prompt)

import { PropsWithStyles } from "@/types/styles";
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your prompt"
      />
      <button type="submit">Send</button>
    </form>
  );
};
