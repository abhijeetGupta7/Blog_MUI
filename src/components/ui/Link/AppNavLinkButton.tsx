import { styled } from "@mui/material/styles";
import { Link as RouterLink, type LinkProps } from "react-router-dom";
import { buttonStyles } from "../Button/styles";
import type { AppButtonIntent } from "../Button/types";

interface AppNavLinkButtonProps extends LinkProps {
  intent?: AppButtonIntent;
}

export const AppNavLinkButton = styled(RouterLink, {
  shouldForwardProp: (prop) => prop !== "intent",
})<AppNavLinkButtonProps>(({ theme, intent = "primary" }) => ({
  ...buttonStyles[intent](theme),
  textDecoration: "none",
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
}));
