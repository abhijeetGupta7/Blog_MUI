import { styled } from "@mui/material/styles";
import { AppContainer } from "../layout/AppContainer";

/**
 * FooterContainer - Container for footer content with responsive flex layout.
 * Stacks vertically on mobile, horizontally on desktop.
 */
export const FooterContainer = styled(AppContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

FooterContainer.displayName = "FooterContainer";
