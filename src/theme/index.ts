import { DefaultTheme } from "styled-components";
import colors from "./colors";
import typographyVariants from "./typographyVariants";

const myTheme: DefaultTheme = {
  colors,
  borderRadius: "8px",
  fontFamily: "Roboto, sans-serif",
  typographyVariants,
  transition: "200ms ease-in-out",
};

export default myTheme;
