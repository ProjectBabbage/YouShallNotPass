import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import checkSvg from "@/assets/images/check.svg";
import crossSvg from "@/assets/images/cross.svg";
import { getClasses } from "@/utils/class";

export interface GuessingStatusProps extends PropsWithStyles {
  isGuessed: boolean | null;
}

export const GuessingStatus = ({ isGuessed }: GuessingStatusProps) => {
  return (
    <GuessingStatusRoot>
      {isGuessed === true && (
        <Stack gap={2}>
          <img src={checkSvg} />
          <p>Nice, you guessed it! <br/>You are still a fool, though.</p>
          <img className={getClasses("balrog")} alt="balrog" src="/src/assets/images/balrog.gif"></img>
        </Stack>

      )}
      {isGuessed === false && (
        <Stack>
          <img src={crossSvg} />
          <p>Wrong guess, you fool.</p>
          <img className={getClasses("balrog")} alt="balrog" src="/src/assets/images/balrog.gif"></img>
        </Stack>
      )}
    </GuessingStatusRoot>
  );
};

/* ------------- Styled components ------------- */
const GuessingStatusRoot = styled.div`
  padding:5px;
  .balrog{
    height:100%;
    border-radius:0px
    width:100%;
  }
`;
