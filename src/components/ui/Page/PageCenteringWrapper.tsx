import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * PageCenteringWrapper - A reusable wrapper for centering content on pages.
 * Provides consistent padding and centering behavior across all pages.
 */
export const PageCenteringWrapper = styled(AppBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

PageCenteringWrapper.displayName = "PageCenteringWrapper";
