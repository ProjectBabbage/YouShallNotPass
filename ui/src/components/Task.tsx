import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";

export interface ComponentProps extends PropsWithStyles {}

export const Component = () => {
  return <ComponentRoot></ComponentRoot>;
};

/* ------------- Styled components ------------- */
const ComponentRoot = styled.div``;
