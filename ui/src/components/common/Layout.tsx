import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import { Stack } from "@/components/common/Stack";
import { ReactNode } from "react";
import { Header } from "../Header/Header";
import { getClasses } from "@/utils/class";

export interface LayoutProps extends PropsWithStyles {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledDiv className={getClasses("layout")}>
      <Header />
      {children}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 15vh;
`;
