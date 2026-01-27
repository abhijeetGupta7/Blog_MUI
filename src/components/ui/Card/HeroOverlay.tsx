import { styled, alpha } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * HeroOverlay - Gradient overlay for hero cards.
 * Provides dark gradient overlay for hero card images.
 */
export const HeroOverlay = styled(AppBox)(() => ({
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to top, ${alpha("#000", 0.85)} 0%, transparent 60%)`,
  pointerEvents: "none",
  zIndex: 1,
}));

HeroOverlay.displayName = "HeroOverlay";
