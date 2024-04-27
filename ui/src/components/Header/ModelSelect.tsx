// Props: onChange (function)
import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";

// Return: select element with model options, onChange handler
export interface ModelSelectProps extends PropsWithStyles {
  onChange: () => void;
}
export const ModelSelect = ({ onChange }: ModelSelectProps) => {
  return (
    <StyledSelect onChange={onChange}>
      <option value="model1">Model 1</option>
      <option value="model2">Model 2</option>
      {/* Add more models as needed */}
    </StyledSelect>
  );
};



const StyledSelect = styled.select`
  display: block;
  margin: 5px 0px;
  font-size: 18px; 
  padding: 8px; 
  border: 2px solid lightblue;
  border-radius: 10px;
  background-color: white; /* Light grey background */

`;
