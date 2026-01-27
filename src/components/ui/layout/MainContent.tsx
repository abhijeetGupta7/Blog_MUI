import { styled } from "@mui/material/styles";
import { AppContainer } from "../layout/AppContainer";

/**
 * MainContent - A container for main page content with consistent padding.
 * Used in app layouts to wrap page content.
 */
export const MainContent = styled(AppContainer)(({ theme }) => ({
  flexGrow: 1,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

MainContent.displayName = "MainContent";
