// Props: onChange (function)
// Return: input element for hostname with onChange handler

import { PropsWithStyles } from "@/types/styles";

export interface HostInputProps extends PropsWithStyles {
  onChange: () => void;
}

export const HostInput = ({ onChange }: HostInputProps) => {
  return (
    <input
      type="text"
      placeholder="Enter Ollama Server Hostname"
      onChange={onChange}
    />
  );
};
