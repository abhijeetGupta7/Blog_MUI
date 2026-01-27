import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * FooterRoot - Root container for footer with border and spacing.
 * Provides consistent footer styling across the application.
 */
export const FooterRoot = styled(AppBox)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  marginTop: "auto",
}));

FooterRoot.displayName = "FooterRoot";
