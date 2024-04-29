// Props: onChange (function)

import { useAppContext } from "@/contexts/app.context";
import { Level } from "@/types/levels";
import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";

export const LevelSelect = () => {
  const { setSelectedLevel, setMessages, getNewUid, levels } = useAppContext();

  const onChangeLevel = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log("changed level", e.target.value);
      setSelectedLevel(e.target.value);
      getNewUid();
      setMessages([]);
    },
    [setSelectedLevel, setMessages, getNewUid]
  );

  return (
    <StyledSelect onChange={onChangeLevel}>
      {levels.map((level) => (
        <option key={level.id} value={level.id}>
          {level.name}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  display: block;
  margin: 5px 0px;
  font-size: 18px;
  padding: 8px;
  border: 2px solid grey;
  border-radius: 10px;
  background-color: white; /* Light grey background */
`;
