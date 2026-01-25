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
  
  headingLarge: theme => ({
    fontSize: theme.typography.h3.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
    fontWeight: 800,
    color: theme.palette.text.primary,
  }),

  headingMedium: theme => ({
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h5.lineHeight,
    fontWeight: 600,
    color: theme.palette.text.primary,
  }),

  headingSmall: theme => ({
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    fontWeight: theme.typography.h6.fontWeight,
    color: theme.palette.text.primary,
  }),

  caption: theme => ({
    fontSize: theme.typography.caption.fontSize,
    lineHeight: theme.typography.caption.lineHeight,
    fontWeight: theme.typography.caption.fontWeight,
    color: theme.palette.text.secondary,
  }),
};
