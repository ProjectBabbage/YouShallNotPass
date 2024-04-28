import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import checkSvg from "@/assets/images/check.svg";
import crossSvg from "@/assets/images/cross.svg";

export interface GuessingStatusProps extends PropsWithStyles {
  isGuessed: boolean | null;
}

export const GuessingStatus = ({ isGuessed }: GuessingStatusProps) => {
  return (
    <GuessingStatusRoot>
      {isGuessed === true && (
        <Stack gap={2}>
          <img src={checkSvg} />
          <p>Nice, you guessed it!</p>
        </Stack>
      )}
      {isGuessed === false && (
        <Stack>
          <img src={crossSvg} />
          <p>Wrong guess.</p>
        </Stack>
      )}
    </GuessingStatusRoot>
  );
};

/* ------------- Styled components ------------- */
const GuessingStatusRoot = styled.div``;
