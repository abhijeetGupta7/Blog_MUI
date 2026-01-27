import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * CarouselTrack - Horizontal scrolling container for carousels.
 * Provides scroll snap, hidden scrollbar, and responsive padding.
 */
export const CarouselTrack = styled(AppBox)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    paddingLeft: "calc(50vw - 210px)",
    paddingRight: "calc(50vw - 210px)",
  },
  "&::-webkit-scrollbar": { display: "none" },
  scrollbarWidth: "none",
}));

CarouselTrack.displayName = "CarouselTrack";
