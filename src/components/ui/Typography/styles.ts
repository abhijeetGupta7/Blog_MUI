import type { Theme } from "@mui/material/styles";
import type { AppTypographyIntent } from "./types";

export const typographyStyles: Record<
  AppTypographyIntent,
  (theme: Theme) => React.CSSProperties
> = {
  bodyPrimary: theme => ({
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    fontWeight: theme.typography.body1.fontWeight,
    color: theme.palette.text.primary,
  }),

  bodySecondary: theme => ({
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
    fontWeight: theme.typography.body2.fontWeight,
    color: theme.palette.text.secondary,
  }),
};
