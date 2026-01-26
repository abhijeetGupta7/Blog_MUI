import Stack, { type StackProps } from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { type AppGapProp, resolveGap } from "./spacing";

// 1. Extend Props
// We allow all native Stack props (sx, divider, ref, etc.)
// We strictly type 'gap' to use our design tokens
export interface AppStackProps extends Omit<StackProps, "gap"> {
  gap?: AppGapProp;
}

// 2. The Component
export const AppStack = styled(Stack, {
  // Prevent 'gap' from being passed to the DOM element (would be invalid HTML)
  shouldForwardProp: (prop) => prop !== "gap",
})<AppStackProps>(({ theme, gap = "md" }) => {
  
  // 3. Apply Logic
  // Uses 'useFlexGap' implicitly by setting the CSS 'gap' property directly
  return resolveGap(theme, gap);
});

AppStack.displayName = "AppStack";