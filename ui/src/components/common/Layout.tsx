import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import { Stack } from "@/components/common/Stack";
import { ReactNode } from "react";
import { Header } from "../Header/Header";

export interface LayoutProps extends PropsWithStyles {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutRoot>
      <Header />
      {children}
    </LayoutRoot>
  );
};

/* ------------- Styled components ------------- */
const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
`;
