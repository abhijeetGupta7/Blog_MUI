import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { AppCardRoot } from "./ui/Card/AppCardRoot";
import { AppTypography } from "./ui/Typography/AppTypography";

// 1. The Card Root (Extends your system Card)
// We add an 'active' prop to handle the zoom/focus logic
export const HeroCardRoot = styled(AppCardRoot, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  minWidth: 300,
  height: 520,
  flexShrink: 0,
  scrollSnapAlign: "center",
  position: "relative",
  overflow: "hidden", // masks the image zoom

  // The "Focus" Animation
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

// 2. The Gradient Overlay
export const HeroOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to top, ${alpha("#000", 0.85)} 0%, transparent 60%)`,
  pointerEvents: "none", // let clicks pass through to the image/action
});

// 3. The Content Wrapper (Absolute positioned)
export const HeroContent = styled(CardContent)<{ active: boolean }>(({ theme, active }) => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
  padding: theme.spacing(4),
  color: "white",
  zIndex: 1, // ensure above gradient

  // Slide up animation
  transform: active ? "translateY(0)" : "translateY(20px)",
  transition: theme.transitions.create("transform", {
    duration: 500,
    easing: "cubic-bezier(0.2,0,0,1)",
  }),
}));

// 4. The Description (Collapsible)
export const HeroDescription = styled(AppTypography)<{ active: boolean }>(({ theme, active }) => ({
  color: "rgba(255,255,255,0.85)",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  
  // Collapse logic
  maxHeight: active ? 80 : 0,
  opacity: active ? 1 : 0,
  transition: theme.transitions.create(["opacity", "max-height"], {
    duration: 300,
  }),
}));

// 5. The Carousel Track (Hide Scrollbar)
export const CarouselTrack = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  paddingBottom: theme.spacing(4),
  
  // Center the starting item on desktop
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    paddingLeft: "calc(50vw - 210px)",
    paddingRight: "calc(50vw - 210px)",
  },

  // Hide scrollbar
  "&::-webkit-scrollbar": { display: "none" },
  scrollbarWidth: "none",
}));