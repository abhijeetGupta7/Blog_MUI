import type { Theme } from "@mui/material/styles";
import type { AppButtonIntent } from "./types";

export const buttonStyles: Record<
  AppButtonIntent,
  (theme: Theme) => React.CSSProperties
> = {
  primary: (theme) => ({
    ...theme.typography.button,

    padding: theme.spacing(1, 2.75), 
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: theme.shadows[2], 

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: theme.shadows[4], 
    },
  }),

  secondary: (theme) => ({
    ...theme.typography.button,

    padding: theme.spacing(1, 2.75),

    backgroundColor: "transparent",
    color: theme.palette.primary.main, 
    border: `1px solid ${theme.palette.primary.main}`,

    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.04)",   // not from theme so directly used this
    },
  }),

  text: (theme) => ({
    ...theme.typography.button,
    
    fontSize: theme.typography.pxToRem(15),
    padding: theme.spacing(1, 1.5),

    backgroundColor: "transparent",
    color: theme.palette.primary.main,
    boxShadow: "none",

    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  }),
  ghost: (theme) => ({
    ...theme.typography.button,
    // Reset specific sizes if needed, or inherit generic ones
    padding: theme.spacing(1, 2), 
    
    backgroundColor: "transparent",
    color: theme.palette.text.primary,
    boxShadow: "none",

    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  }),
};