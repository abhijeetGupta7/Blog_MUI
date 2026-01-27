import { styled } from "@mui/material/styles";
import Box, { type BoxProps } from "@mui/material/Box";

export type AppBoxProps = BoxProps;

export const AppBox = styled(Box)<BoxProps>({
  // Sets minWidth to 0 to prevent common flexbox overflow bugs
  minWidth: 0, 
});

AppBox.displayName = "AppBox";

