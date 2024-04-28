// Props: onChange (function)
// Return: input element for hostname with onChange handler

import { useAppContext } from "@/contexts/app.context";
import { PropsWithStyles } from "@/types/styles";
import styled from "@emotion/styled";

export interface HostInputProps extends PropsWithStyles {
  onChange: () => void;
}

export const HostInput = ({ onChange }: HostInputProps) => {
  const { api } = useAppContext();
  return <input type="text" placeholder={api} onChange={onChange} disabled />;
};

const StyledInput = styled.input`
  display: block;
  margin: 10px 0px;
  font-size: 18px;
  padding: 8px;
  border: 2px solid lightblue;
  border-radius: 10px;
`;
