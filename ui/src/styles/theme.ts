const breakpoints = {
  xs: 375,
  mobile: 768, // below it's considered mobile
  medium: 1024,
  large: 1610,
  xlarge: 1800,
};

const down = (breakpoint: keyof typeof breakpoints | number) => {
  if (typeof breakpoint === "number")
    return `@media (max-width: ${breakpoint}px)`;
  return `@media (max-width: ${breakpoints[breakpoint]}px)`;
};

const up = (breakpoint: keyof typeof breakpoints | number) => {
  if (typeof breakpoint === "number")
    return `@media (min-width: ${breakpoint}px)`;
  return `@media (min-width: ${breakpoints[breakpoint]}px)`;
};

const heightDown = (breakpoint: number) => {
  return `@media (max-height: ${breakpoint}px)`;
};

const heightUp = (breakpoint: number) => {
  return `@media (min-height: ${breakpoint}px)`;
};

export const theme = {
  breakpoints: { ...breakpoints, down, up, heightDown, heightUp },

  colors: {
    // Define you color palette
    primary: "black",
    player: "#7A96B8",
  },
  mixins: {
    // Define your text mixins
    button: `
        font-family: Open Sans, Helvetica;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.52px;
        line-height:  110%;
        `,
    S: `
          font-family: Open Sans, Helvetica;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 140%;
          `,
      M: `
            font-family: Open Sans, Helvetica;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 140%;
            `,
      L: `
            font-family: Open Sans, Helvetica;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 140%;
          `,
    h1: `
          font-family: Gandalf, Helvetica;
          font-size: 96px;
          font-style: normal;
          font-weight: 300;
          letter-spacing: 0px;
          line-height: 110%;
        `,
    h2: `
        font-family: Gandalf, Helvetica;
        font-size: 80px;
        font-style: normal;
        font-weight: 300;
        letter-spacing: 0px;
        line-height: 110%;
        `,
    h3: `
          font-family: Open Sans, Helvetica;
          font-size: 64px;
          font-style: normal;
          font-weight: 300;
          letter-spacing: 0px;
          line-height: 110%;
        `,
    h4: `
          font-family: Open Sans, Helvetica;
          font-size: 48px;
          font-style: normal;
          font-weight: 300;
          letter-spacing: 0px;
          line-height: 110%;
        `,
    h5: `
          font-family: Open Sans, Helvetica;
          font-size: 32px;
          font-style: normal;
          font-weight: 300;
          letter-spacing: 0px;
          line-height: 120%;
        `,
    h6: `
          font-family: Open Sans, Helvetica;
          font-size: 24px;
          font-style: normal;
          font-weight: 300;
          letter-spacing: 0px;
          line-height: 120%;
        `,
  },
};

export type TextType = keyof typeof theme.mixins;
