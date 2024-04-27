import styled from "@emotion/styled";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { PropsWithStyles } from "@/types/styles";
import { theme } from "@/styles/theme";

export interface HeaderProps extends PropsWithStyles {}

export const Header = () => {
  return (
    <HeaderRoot>
      <Text type="M">You Shall Not Pass (PB#5)</Text>
    </HeaderRoot>
  );
};

/* ------------- Styled components ------------- */
const HeaderRoot = styled.div``;
