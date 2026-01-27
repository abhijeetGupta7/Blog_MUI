import { styled } from "@mui/material/styles";
import { AppGrid } from "../layout";

/**
 * AuthFormPanel - Panel container for authentication forms.
 * Provides centered flex layout for form content.
 */
export const AuthFormPanel = styled(AppGrid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

AuthFormPanel.displayName = "AuthFormPanel";
