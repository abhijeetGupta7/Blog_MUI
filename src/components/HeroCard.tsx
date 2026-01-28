import { styled, alpha } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import { AppCardRoot } from "./ui/Card/AppCardRoot";
import { AppTypography } from "./ui/Typography/AppTypography";
import { CarouselTrack } from "./ui/Carousel";

export const HeroCardRoot = styled(AppCardRoot, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  minWidth: 300,
  height: 520,
  flexShrink: 0,
  scrollSnapAlign: "center",
  position: "relative",
  overflow: "hidden",

  transform: active ? "scale(1)" : "scale(0.85)",
  opacity: active ? 1 : 0.5,
  transition: theme.transitions.create(["transform", "opacity"], {
    duration: 600,
    easing: "cubic-bezier(0.2,0,0,1)",
  }),

  [theme.breakpoints.up("md")]: {
    minWidth: 520,
  },
}));

export const HeroOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to top, ${alpha("#000", 0.85)} 0%, transparent 60%)`,
  pointerEvents: "none",
});

export const HeroContent = styled(CardContent)<{ active: boolean }>(
  ({ theme, active }) => ({
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: theme.spacing(4),
    color: "white",
    zIndex: 1,

    transform: active ? "translateY(0)" : "translateY(20px)",
    transition: theme.transitions.create("transform", {
      duration: 500,
      easing: "cubic-bezier(0.2,0,0,1)",
    }),
  })
);

export const HeroDescription = styled(AppTypography)<{ active: boolean }>(
  ({ theme, active }) => ({
    color: "rgba(255,255,255,0.85)",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",

    maxHeight: active ? 80 : 0,
    opacity: active ? 1 : 0,
    transition: theme.transitions.create(["opacity", "max-height"], {
      duration: 300,
    }),
  })
);

export { CarouselTrack };
