import styled from "@emotion/styled";
import { theme, TextType } from "@/styles/theme";

export const Text = styled.span<
  { type?: TextType } & React.HTMLAttributes<HTMLSpanElement>
>`
  // different style given the mixin type
  ${({ type }) => {
    switch (type) {
      case "button":
        return theme.mixins.button;
      case "h1":
        return theme.mixins.h1;
      case "h2":
        return theme.mixins.h2;
      case "h3":
        return theme.mixins.h3;
      case "h4":
        return theme.mixins.h4;
      case "h5":
        return theme.mixins.h5;
      case "h6":
        return theme.mixins.h6;
      case "L":
        return theme.mixins.L;
      case "M":
        return theme.mixins.M;
      case "S":
        return theme.mixins.S;
      default:
        return theme.mixins.M;
    }
  }}
`;
