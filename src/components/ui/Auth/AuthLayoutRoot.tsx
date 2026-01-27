import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * AuthLayoutRoot - Root container for authentication layouts.
 * Provides full-height container for split auth layouts.
 */
export const AuthLayoutRoot = styled(AppBox)({
  minHeight: "100vh",
});

AuthLayoutRoot.displayName = "AuthLayoutRoot";
