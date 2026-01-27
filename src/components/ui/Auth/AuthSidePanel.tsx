import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

/**
 * AuthSidePanel - Side panel for authentication layouts.
 * Hidden on mobile, visible on desktop with primary color background.
 */
export const AuthSidePanel = styled(Grid)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

AuthSidePanel.displayName = "AuthSidePanel";
