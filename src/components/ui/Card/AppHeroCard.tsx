import React, { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppCardRoot, type AppCardRootProps } from "./AppCardRoot";
import { AppCardAction } from "./AppCardAction";
import { AppCardMedia, AppCardMediaContainer } from "./AppCardMedia";
import { AppCardContent } from "./AppCardContent";
import { AppCardTitle } from "./AppCardTitle";
import { AppCardDescription } from "./AppCardDescription";
import { HeroOverlay, HeroTopContent } from "./index";
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------
// STYLED OVERRIDES (The "Cover" Logic)
// ----------------------------------------------------------------------

interface HeroRootProps extends AppCardRootProps {
  active?: boolean;
}

const StyledRoot = styled(AppCardRoot, {
  shouldForwardProp: (prop) => prop !== "active",
})<HeroRootProps>(({ theme, active }) => ({
  minWidth: 300,
  height: 520,
  position: "relative",
  overflow: "hidden",
  scrollSnapAlign: "center",

  transform: active ? "scale(1)" : "scale(0.85)",
  opacity: active ? 1 : 0.5,
  transition: theme.transitions.create(["transform", "opacity"], {
    duration: 600,
    easing: "cubic-bezier(0.2, 0, 0, 1)",
  }),

  [theme.breakpoints.up("md")]: {
    minWidth: 520,
  },
}));

const StyledContent = styled(AppCardContent, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 2,
    color: theme.palette.common.white,

    transform: active ? "translateY(0)" : "translateY(20px)",
    transition: theme.transitions.create("transform", {
      duration: 500,
      easing: "cubic-bezier(0.2, 0, 0, 1)",
    }),
  })
);

const StyledDescription = styled(AppCardDescription, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
    color: "rgba(255,255,255,0.85)",

    maxHeight: active ? 80 : 0,
    opacity: active ? 1 : 0,
    transition: theme.transitions.create(["opacity", "max-height"], {
      duration: 300,
    }),
  })
);

const StyledImage = styled(AppCardMedia, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active }) => ({
    transform: active ? "scale(1.15)" : "scale(1)",
    transition: "transform 800ms cubic-bezier(0.2, 0, 0, 1)",
  })
);

const StyledTitle = styled(AppCardTitle)({
  lineHeight: 1.1,
});

// ----------------------------------------------------------------------
// THE COMPONENT
// ----------------------------------------------------------------------

export interface AppHeroCardProps extends AppCardRootProps {
  image: string;
  title: string;
  description?: string;
  href: string;
  active?: boolean;
  topContent?: React.ReactNode;
}

export const AppHeroCard = forwardRef<HTMLDivElement, AppHeroCardProps>(
  ({ image, title, description, href, active = false, topContent, ...other }, ref) => {
    return (
      <StyledRoot ref={ref} active={active} interactive={false} {...other}>
        <AppCardAction component={RouterLink} to={href}>
          {/* IMAGE LAYER */}
          <AppCardMediaContainer height="100%">
            <StyledImage
              image={image}
              active={active}
            />
            <HeroOverlay />
          </AppCardMediaContainer>

          {/* CONTENT LAYER */}
          <StyledContent active={active}>
            {topContent && <HeroTopContent>{topContent}</HeroTopContent>}

            <StyledTitle intent="headingMedium" gutterBottom>
              {title}
            </StyledTitle>

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
