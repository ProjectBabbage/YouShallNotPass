import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import { getClasses } from "@/utils/class";
import balrogGifSvg from "@/assets/images/balrog.gif";

export interface BalrogGifProps extends PropsWithStyles {}

export const BalrogGif = () => {
  return <BalrogGifRoot alt="balrog" src={balrogGifSvg}></BalrogGifRoot>;
};

/* ------------- Styled components ------------- */
const BalrogGifRoot = styled.img`
  width: 100px;
`;
