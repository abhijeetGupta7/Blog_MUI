import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * BackButtonWrapper - Wrapper for back button with consistent spacing.
 * Provides margin-bottom spacing for back navigation buttons.
 */
export const BackButtonWrapper = styled(AppBox)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

BackButtonWrapper.displayName = "BackButtonWrapper";
