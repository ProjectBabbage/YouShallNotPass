import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import checkSvg from "@/assets/images/check.svg";
import crossSvg from "@/assets/images/cross.svg";
import { getClasses } from "@/utils/class";
import { BalrogGif } from "./BalrogGif";

export interface GuessingStatusProps extends PropsWithStyles {
  isGuessed: boolean | null;
}

export const GuessingStatus = ({ isGuessed }: GuessingStatusProps) => {
  return (
    <GuessingStatusRoot>
      {isGuessed === true && (
        <Stack gap={5} align="center">
          <StatusImg src={checkSvg} />
          <span>Nice! You guessed it! </span>
          <BalrogGif />
        </Stack>
      )}
      {isGuessed === false && (
        <Stack align="center" gap={5}>
          <StatusImg src={crossSvg} />
          <span>Wrong guess, you fool.</span>
        </Stack>
      )}
    </GuessingStatusRoot>
  );
};

/* ------------- Styled components ------------- */
const GuessingStatusRoot = styled.div`
  padding: 5px;
`;

const StatusImg = styled.img`
  height: 1em;
`;
