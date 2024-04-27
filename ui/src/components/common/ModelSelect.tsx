// Props: onChange (function)

import { PropsWithStyles } from "@/types/styles";

// Return: select element with model options, onChange handler
export interface ModelSelectProps extends PropsWithStyles {
  onChange: () => void;
}
export const ModelSelect = ({ onChange }: ModelSelectProps) => {
  return (
    <select onChange={onChange}>
      <option value="model1">Model 1</option>
      <option value="model2">Model 2</option>
      {/* Add more models as needed */}
    </select>
  );
};
