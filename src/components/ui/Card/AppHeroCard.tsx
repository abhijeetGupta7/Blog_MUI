import React, { forwardRef } from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";

// Import our existing Primitives 
import { AppCardRoot, type AppCardRootProps } from "./AppCardRoot";
import { AppCardAction } from "./AppCardAction";
import { AppCardMedia, AppCardMediaContainer } from "./AppCardMedia";
import { AppCardContent } from "./AppCardContent";
import { AppCardTitle } from "./AppCardTitle";
import { AppCardDescription } from "./AppCardDescription";

// ----------------------------------------------------------------------
// 1. STYLED OVERRIDES (The "Cover" Logic)
// ----------------------------------------------------------------------

// A. Root: Handles the "Active" scaling state
// We extend AppCardRootProps to add 'active'
interface HeroRootProps extends AppCardRootProps {
  active?: boolean;
}

const StyledRoot = styled(AppCardRoot, {
  shouldForwardProp: (prop) => prop !== "active",
})<HeroRootProps>(({ theme, active }) => ({
  // 1. Generic Layout (Can be overridden by sx if needed, but defaults are solid)
  minWidth: 300,
  height: 520,
  position: "relative",
  overflow: "hidden", // Masks the zoom
  scrollSnapAlign: "center", // Built-in support for carousels

  // 2. The "Pop" Animation
  // Note: We use the theme transitions we set up earlier!
  transform: active ? "scale(1)" : "scale(0.85)",
  opacity: active ? 1 : 0.5,
  transition: theme.transitions.create(["transform", "opacity"], {
    duration: 600, // Slightly slower for dramatic effect
    easing: "cubic-bezier(0.2, 0, 0, 1)",
  }),

  [theme.breakpoints.up("md")]: {
    minWidth: 520,
  },
}));

// B. Overlay: The Gradient
const StyledOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to top, ${alpha("#000", 0.85)} 0%, transparent 60%)`,
  pointerEvents: "none", // Let clicks pass through
  zIndex: 1,
}));

// C. Content: Absolute Positioning
// We extend AppCardContent to position it at the bottom
const StyledContent = styled(AppCardContent)<{ active?: boolean }>(({ theme, active }) => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
  zIndex: 2, // Above gradient
  color: theme.palette.common.white, // Always white on dark overlay

  // Slide Up Animation
  transform: active ? "translateY(0)" : "translateY(20px)",
  transition: theme.transitions.create("transform", {
    duration: 500,
    easing: "cubic-bezier(0.2, 0, 0, 1)",
  }),
}));

// D. Description: Collapse Logic
const StyledDescription = styled(AppCardDescription)<{ active?: boolean }>(({ theme, active }) => ({
  color: alpha(theme.palette.common.white, 0.85),
  
  // Collapse Animation
  maxHeight: active ? 80 : 0,
  opacity: active ? 1 : 0,
  transition: theme.transitions.create(["opacity", "max-height"], {
    duration: 300,
  }),
}));

// ----------------------------------------------------------------------
// 2. THE COMPONENT (Generic & Reusable)
// ----------------------------------------------------------------------

export interface AppHeroCardProps extends AppCardRootProps {
  image: string;
  title: string;
  description?: string;
  href: string;
  active?: boolean; // Controls the animation
  topContent?: React.ReactNode; // Slot for "Featured" chip, etc.
}

export const AppHeroCard = forwardRef<HTMLDivElement, AppHeroCardProps>(
  ({ image, title, description, href, active = false, topContent, ...other }, ref) => {
    return (
      <StyledRoot ref={ref} active={active} interactive={false} {...other}>
        <AppCardAction component={RouterLink} to={href}>
          
          {/* IMAGE LAYER */}
          <AppCardMediaContainer height="100%">
            <AppCardMedia
              component="img"
              image={image}
              alt={title}
              // Custom Zoom for Hero Variant
              sx={{
                transform: active ? "scale(1.15)" : "scale(1)",
                transition: "transform 800ms cubic-bezier(0.2, 0, 0, 1)",
              }}
            />
            <StyledOverlay />
          </AppCardMediaContainer>

          {/* CONTENT LAYER */}
          <StyledContent active={active}>
            {topContent && <Box sx={{ mb: 2 }}>{topContent}</Box>}

            <AppCardTitle intent="headingMedium" gutterBottom sx={{ lineHeight: 1.1 }}>
              {title}
            </AppCardTitle>

            {description && (
              <StyledDescription intent="bodyPrimary" active={active}>
                {description}
              </StyledDescription>
            )}
          </StyledContent>

        </AppCardAction>
      </StyledRoot>
    );
  }
);

AppHeroCard.displayName = "AppHeroCard";