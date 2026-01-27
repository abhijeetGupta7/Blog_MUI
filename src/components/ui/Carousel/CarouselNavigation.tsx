import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * CarouselNavigation - Container for carousel navigation buttons.
 * Hidden on mobile, visible on desktop (md breakpoint and above).
 */
export const CarouselNavigation = styled(AppBox)(({ theme }) => ({
  display: "none",
  gap: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

CarouselNavigation.displayName = "CarouselNavigation";
