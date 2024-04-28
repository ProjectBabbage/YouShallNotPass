// Props: onChange (function)

import { useAppContext } from "@/contexts/app.context";
import { Level } from "@/types/levels";
import { PropsWithStyles } from "@/types/styles";
import { useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";


// Return: select element with model options, onChange handler
export interface LevelSelectProps extends PropsWithStyles {
  onChange: () => void;
}
export const LevelSelect = ({ onChange }: LevelSelectProps) => {
  const { api } = useAppContext();
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    fetch(`${api}/levels/`)
      .then((response) => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Network response from fast api was not ok");
        }
        return response.json(); // Parse JSON data from the response
      })
      .then((levels) => {
        console.log("Level fetched", levels);
        setLevels(levels);
      })
      .catch((reason) =>
        console.log("FAILED to request levels : reason ", reason)
      );
  }, [api]);

  return (
    <StyledSelect onChange={onChange}>
      {levels.map((level) => (
        <option key={level.id} value={level.name}>
          {level.name}
        </option>
      ))}
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
