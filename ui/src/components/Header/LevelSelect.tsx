// Props: onChange (function)

import { useAppContext } from "@/contexts/app.context";
import { Level } from "@/types/levels";
import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";

export const LevelSelect = () => {
  const { api, setSelectedLevel, setMessages, getNewUid } = useAppContext();
  const [levels, setLevels] = useState<Level[]>([]);

  const onChangeLevel = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log("changed level", e.target.value);
      setSelectedLevel(e.target.value);
      getNewUid();
      setMessages([]);
    },
    [setSelectedLevel, setMessages, getNewUid]
  );

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
    <StyledSelect onChange={onChangeLevel}>
      {levels.map((level) => (
        <option key={level.id} value={level.id}>
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
