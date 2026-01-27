import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * AppLayoutRoot - Root container for app layouts with flex column layout.
 * Provides full-height flex container for header, content, and footer.
 */
export const AppLayoutRoot = styled(AppBox)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

AppLayoutRoot.displayName = "AppLayoutRoot";
