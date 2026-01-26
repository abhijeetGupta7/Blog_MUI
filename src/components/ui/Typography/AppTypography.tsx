import Typography, { type TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import type { AppTypographyIntent } from "./types";
import { typographyStyles } from "./styles";

interface AppTypographyProps extends TypographyProps {
  /**
   * Semantic intent for typography.
   */
  intent?: AppTypographyIntent;
}

export const AppTypography = styled(Typography, {
    shouldForwardProp: prop => prop !== "intent",
  })<AppTypographyProps>(({ theme, intent = "bodyPrimary" }) => ({
    fontFamily: theme.typography.fontFamily,
    ...typographyStyles[intent](theme),
}));
  