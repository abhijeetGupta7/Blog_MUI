import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * AuthSideContent - Content container for authentication side panel.
 * Provides centered text layout with horizontal padding.
 */
export const AuthSideContent = styled(AppBox)(({ theme }) => ({
  textAlign: "center",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
}));

AuthSideContent.displayName = "AuthSideContent";
