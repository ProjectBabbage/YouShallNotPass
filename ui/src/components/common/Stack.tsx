import React, { memo } from "react";
import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { getClasses } from "@/utils/class";

export interface StackProps extends PropsWithStyles {
  children?: React.ReactNode;
  direction?: "row" | "column";
  justify?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "stretch";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  wrap?: "wrap" | "wrap-reverse" | "nowrap";
  basis?:
    | "auto"
    | "fill"
    | "min-content"
    | "max-content"
    | "fit-content"
    | "content"
    | number;
  gap?: number | { row?: number; column?: number };
  shrink?: number;
  grow?: number;
  cursor?: "pointer" | "text";
}

const flexPreprend = (prop?: string) => {
  if (!prop) return undefined;
  return ["start", "end"].includes(prop) ? "flex-" + prop : prop;
};

/**
 * Stack is a layout component that arranges its children in a vertical or horizontal stack.
 * Similar to MUI Stack.
 */
export const Stack = memo(
  ({
    direction = "row",
    wrap = "nowrap",
    gap = 0,
    shrink = 1,
    grow = 0,
    basis = "auto",
    justify,
    align,
    className,
    children,
    cursor,
    ...props
  }: StackProps & React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <StyledStack
        {...props}
        cursor={cursor}
        className={getClasses(className, "stack")}
        direction={direction}
        justify={flexPreprend(justify)}
        align={flexPreprend(align)}
        basis={basis}
        gap={gap}
        wrap={wrap}
        shrink={shrink}
        grow={grow}
      >
        {children}
      </StyledStack>
    );
  }
);

/* ------------- Styled components ------------- */
const StyledStack = styled.div<{
  direction: string;
  justify?: string;
  align?: string;
  gap: number | { row?: number; column?: number };
  basis:
    | "auto"
    | "fill"
    | "min-content"
    | "max-content"
    | "fit-content"
    | "content"
    | number;
  wrap: string;
  shrink: number;
  grow: number;
  cursor?: "pointer" | "text";
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
  flex-shrink: ${({ shrink }) => shrink};
  flex-grow: ${({ grow }) => grow};
  flex-basis: ${({ basis }) => basis};
  gap: ${({ gap }) =>
    gap && typeof gap === "number" ? `${gap}px` : undefined};
  row-gap: ${({ gap }) =>
    gap && typeof gap !== "number" && "row" in gap
      ? ` ${gap.row}px`
      : undefined};
  column-gap: ${({ gap }) =>
    gap && typeof gap !== "number" && "column" in gap
      ? `${gap.column}px`
      : undefined};
  cursor: ${({ onClick, cursor }) =>
    cursor ?? (onClick ? "pointer" : undefined)};
`;
