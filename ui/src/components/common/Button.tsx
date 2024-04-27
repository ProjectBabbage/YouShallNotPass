import { ReactNode } from "react";
import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import { getClasses } from "@/utils/class";

export interface ButtonProps extends PropsWithStyles {
  onClick?: () => void;
  content: ReactNode;
}

export const Button = ({ className, content, onClick }: ButtonProps) => {
  return (
    <ButtonRoot onClick={onClick} className={getClasses(["button", className])}>
      <Text type="button" className="text">
        {content}
      </Text>
    </ButtonRoot>
  );
};

/* ------------- Styled components ------------- */
const ButtonRoot = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  border: none;
  border-radius: 60px;
  background-color: blue;

  .text {
    display: block;
    text-align: end;
    transition: transform 0.3s ease-in-out;
  }

  :hover {
    cursor: pointer;
    border: none;
    background-color: lightblue;

    .text {
      transform: translateY(-100%);
    }
  }
`;
