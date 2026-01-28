import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

/**
 * AppMenuItem
 * Design-system componenet around MUI MenuItem.
 * Intended for use within form controls such as Select
 */
export const AppMenuItem = styled(MenuItem)(() => ({
  // empty for now — styling can come later and use thene
}));

AppMenuItem.displayName = "AppMenuItem";
