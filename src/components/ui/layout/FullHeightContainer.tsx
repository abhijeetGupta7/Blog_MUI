import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * FullHeightContainer - A container that takes full viewport height.
 * Commonly used for page layouts, auth pages, or full-screen sections.
 */
export const FullHeightContainer = styled(AppBox)({
  minHeight: "100vh",
});

FullHeightContainer.displayName = "FullHeightContainer";
