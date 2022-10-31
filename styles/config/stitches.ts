import { createStitches } from "@stitches/react";

import { utils } from "./utils";

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      light: "#F0F0F0",
      dark: "#3C3C3C",
      background: "#EBF1F4",
      error: "#FF5C72",
      warning: "#F3DE8A",
      success: "#9AE19D",
      placeholder: "#CCCCCC",
    },
    fontSizes: {
      "heading-lg": "2.5rem",
      "heading-md": "2rem",
      "heading-sm": "1.5rem",
      "heading-xs": "1.25rem",
      "paragraph-md": "1rem",
      "paragraph-sm": "0.75rem",
      overline: "0.625rem",
    },
    lineHeights: {
      heading: "6.875rem",
      "paragraph-md": "1.25rem",
      "paragraph-sm": "1rem",
      overline: "0.75rem",
    },
    letterSpacings: {
      overline: "0.078rem",
      none: "0",
    },
    fonts: {
      heading: "'Fugaz One', cursive",
      body: "'Comfortaa', cursive",
    },
    borderWidths: {
      none: "0px",
      small: "1px",
      medium: "2px",
      large: "4px",
    },
    radii: {
      none: "0px",
      small: "4px",
      medium: "8px",
      large: "16px",
      pill: "100%",
    },
    space: {
      none: "0px",
      small: "4px",
      medium: "8px",
      large: "12px",
      "x-large": "16px",
      "xx-large": "20px",
      "xxx-large": "40px",
    },
    sizes: {
      none: "0px",
      small: "4px",
      medium: "8px",
      large: "12px",
      "x-large": "16px",
      "xx-large": "20px",
      "xxx-large": "40px",
    },
    shadows: {
      none: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
      "elevation-sm": "0px 4px 8px 0px rgba(60, 60, 60, 0.3)",
      "deeper-sm": "0px -4px 8px 0px rgba(60, 60, 60, 0.5)",
    },
    zIndices: {
      none: "0",
      "elevation-sm": "1",
      "elevation-md": "10",
      "elevation-lg": "100",
      "elevation-xl": "1000",
    },
  },
  media: {
    phone: "(min-width: 480px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1024px)",
  },
  utils,
});

const globalStyles = globalCss({
  "@import": [
    "https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa&display=swap",
  ],
  "*": {
    margin: "$none",
    padding: "$none",
    boxSizing: "border-box",
    fontFamily: "$body",
  },
  "html, body": {
    minHeight: "100vh",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  button: {
    cursor: "pointer",
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
  },
  input: {
    outline: "none",
  },
});

export {
  config,
  createTheme,
  css,
  getCssText,
  globalStyles,
  keyframes,
  styled,
  theme,
};
