import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import { useAppContext } from "@/contexts/app.context";
import { GuessingStatus } from "./GuessingStatus";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export interface GuessPasswordProps extends PropsWithStyles {}

export const GuessPassword = () => {
  const [guess, setGuess] = useState("");
  const [isGuessed, setIsGuessed] = useState<boolean | null>(null);
  const { api, selectedLevel } = useAppContext();
  const debouncedGuess = useDebounce(guess, 300);

  useEffect(() => {
    fetch(`${api}/levels/${selectedLevel}/answer/${debouncedGuess}`)
      .then((response) => {
        if (!response.ok) {
          setIsGuessed(null);
          throw new Error("Network error when guessing the password");
        }
        console.log("server answer", response.body);
        return response.json();
      })
      .then((value) => setIsGuessed(value === true));
  }, [debouncedGuess, api, selectedLevel]);

  return (
    <GuessPasswordRoot direction="column" align="center">
      <LevelDescription>Description of level {selectedLevel}</LevelDescription>
      <Stack>
        <GuessPasswordInput
          onChange={(e) => setGuess(e.target.value)}
          value={guess}
          placeholder="Your guess of the password"
        />
        <GuessingStatus isGuessed={isGuessed} />
      </Stack>
    </GuessPasswordRoot>
  );
};

/* ------------- Styled components ------------- */
const GuessPasswordRoot = styled(Stack)`
  border: 3px solid grey;
  border-radius: 5px;
  margin: 10px;
  padding:10px;
`;

const LevelDescription = styled.div`
  font-family:Gandalf;
  font-size:2vw;
  margin-bottom:10px;
`;

const GuessPasswordInput = styled.input`
  font-family:Gandalf;
  font-size:1,5vw;
  min-width:20vw;
  padding:5px;
`;
