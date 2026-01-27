import { styled } from "@mui/material/styles";
import { AppStack } from "../layout/AppStack";

/**
 * CarouselHeader - Header container for carousels with responsive padding.
 * Provides consistent spacing and responsive horizontal padding.
 */
export const CarouselHeader = styled(AppStack)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

CarouselHeader.displayName = "CarouselHeader";
