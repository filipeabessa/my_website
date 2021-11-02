import { TypographyVariants } from "./typographyVariants";
// import original module declarations
import "styled-components";
import { Colors } from "./colors";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: Colors;
    fontFamily: string;
    transition: string;
    typographyVariants: TypographyVariants;
  }
}
