import { useMediaQuery } from "@/hooks/useMediaQuery";
import { theme } from "@/styles/theme";

export const useIsXs = () => {
  return useMediaQuery(theme.breakpoints.down("xs"));
};

export const useIsMobile = () => {
  return useMediaQuery(theme.breakpoints.down("mobile"));
};

export const useIsMedium = () => {
  return useMediaQuery(theme.breakpoints.down("medium"));
};
export const useIsLarge = () => {
  return useMediaQuery(theme.breakpoints.down("large"));
};

export const useIsExtraLarge = () => {
  return useMediaQuery(theme.breakpoints.up("xlarge"));
};

// is down or is up
export const useIsDown = (breakpoint: number) => {
  return useMediaQuery(theme.breakpoints.down(breakpoint));
};
export const useIsUp = (breakpoint: number) => {
  return useMediaQuery(theme.breakpoints.up(breakpoint));
};
