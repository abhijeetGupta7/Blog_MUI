import type { Theme } from "@mui/material/styles";
import type { AppTypographyIntent } from "./types";

// FOR SEO, we need to add component="h3"
// or component=body1 otherwise, it will alwys render a p tag
// we will do this later for AppTypography

export const typographyStyles: Record<
  AppTypographyIntent,
  (theme: Theme) => React.CSSProperties
> = {
  bodyPrimary: (theme) => ({
    ...theme.typography.body1,
    color: theme.palette.text.primary,
  }),

  bodySecondary: (theme) => ({
    ...theme.typography.body2,  
    color: theme.palette.text.secondary,
  }),
  
  headingLarge: (theme) => ({
    ...theme.typography.h3,
    fontWeight: 800,
    color: theme.palette.text.primary,
  }),

  headingMedium: (theme) => ({
    ...theme.typography.h5,
    fontWeight: 600,
    color: theme.palette.text.primary,
  }),

  headingSmall: (theme) => ({
    ...theme.typography.h6,
    color: theme.palette.text.primary,
  }),

  caption: (theme) => ({
    ...theme.typography.caption,
    color: theme.palette.text.secondary,
  }),
};