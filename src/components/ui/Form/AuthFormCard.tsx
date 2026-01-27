import { styled } from "@mui/material/styles";
import { AppPaper } from "../layout/AppPaper";

/**
 * AuthFormCard - Card component for authentication forms.
 * Provides consistent padding for auth form containers.
 */
export const AuthFormCard = styled(AppPaper)(({ theme }) => ({
  padding: theme.spacing(4),
}));

AuthFormCard.displayName = "AuthFormCard";
