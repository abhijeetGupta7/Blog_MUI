import Button, { type ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import type { AppButtonIntent } from "./types";
import { buttonStyles } from "./styles";

interface AppButtonProps extends ButtonProps {
  intent?: AppButtonIntent;
}

export const AppButton = styled(Button, {
  shouldForwardProp: prop => prop !== "intent",
})<AppButtonProps>(({ theme, intent = "primary" }) => ({
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  ...buttonStyles[intent](theme),
}));
