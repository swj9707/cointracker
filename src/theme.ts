import { DefaultTheme } from "styled-components";

export const darkModeTheme: DefaultTheme = {
  containorColor: "#000000",
  bgColor: "#2f3640",
  textColor: "#f5f6fa",
  accentColor: "#30E33D",
  borderColor: "#e1b12c",
};

export const lightModeTheme: DefaultTheme = {
  containorColor: "#E5E7F0",
  bgColor: "#D1D6EF",
  textColor: "#111112",
  accentColor: "#76246E",
  borderColor: "#e1b12c",
};

export const theme = {
  lightModeTheme,
  darkModeTheme,
};
