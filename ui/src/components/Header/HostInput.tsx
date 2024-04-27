// Props: onChange (function)
// Return: input element for hostname with onChange handler

import { PropsWithStyles } from "@/types/styles";
import styled from "@emotion/styled";

export interface HostInputProps extends PropsWithStyles {
  onChange: () => void;
}

export const HostInput = ({ onChange }: HostInputProps) => {
  return (
      <StyledInput
      type="text"
      placeholder="Enter Ollama Server Hostname"
      onChange={onChange}/>
  );
};


const StyledInput = styled.input`
  display: block;
  margin: 10px 0px;
  font-size: 18px; 
  padding: 8px; 
  border: 2px solid lightblue;
  border-radius: 10px;
`;
