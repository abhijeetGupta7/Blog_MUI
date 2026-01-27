import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * AuthFormContent - Content wrapper for authentication forms.
 * Provides consistent top margin for form content.
 */
export const AuthFormContent = styled(AppBox)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

AuthFormContent.displayName = "AuthFormContent";
