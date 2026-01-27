import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * DesktopMenu - Menu container visible only on desktop screens.
 * Hides on mobile, shows on sm breakpoint and above.
 */
export const DesktopMenu = styled(AppBox)(({ theme }) => ({
  display: "none",
  gap: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

DesktopMenu.displayName = "DesktopMenu";
