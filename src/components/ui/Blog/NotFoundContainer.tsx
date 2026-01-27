import { styled } from "@mui/material/styles";
import { AppContainer } from "../layout/AppContainer";

/**
 * NotFoundContainer - Container for 404/not found states.
 * Provides centered layout with large vertical padding.
 */
export const NotFoundContainer = styled(AppContainer)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  textAlign: "center",
}));

NotFoundContainer.displayName = "NotFoundContainer";
