import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

/**
 * AuthFormPanel - Panel container for authentication forms.
 * Provides centered flex layout for form content.
 */
export const AuthFormPanel = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

AuthFormPanel.displayName = "AuthFormPanel";
