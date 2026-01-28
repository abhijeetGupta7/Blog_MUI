import React, { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import type { AppCardRootProps } from "../AppCardRoot";
import { AppCardAction } from "../AppCardAction";
import { AppCardMediaContainer } from "../AppCardMedia";
import { HeroCardRoot, HeroContent, HeroImage, HeroDescription, HeroTitle, HeroOverlay, HeroTopContent } from ".";

export interface AppHeroCardProps extends AppCardRootProps {
  image?: string;
  title: string;
  description?: string;
  href: string;
  active?: boolean;
  topContent?: React.ReactNode;
}

export const AppHeroCard = forwardRef<HTMLDivElement, AppHeroCardProps>(
  ({ image, title, description, href, active = false, topContent, ...other }, ref) => {
    return (
      <HeroCardRoot ref={ref} active={!!active} interactive={false} {...other}>
        <AppCardAction component={RouterLink} to={href}>
          {/* IMAGE LAYER */}
          <AppCardMediaContainer height="100%">
            {image && 
              <HeroImage
              image={image}
              active={!!active}
              component="img"
              alt={title}
            /> }
            <HeroOverlay />
          </AppCardMediaContainer>

          {/* CONTENT LAYER */}
          <HeroContent active={!!active}>
            {topContent && <HeroTopContent>{topContent}</HeroTopContent>}

            <HeroTitle intent="headingMedium" gutterBottom>
              {title}
            </HeroTitle>

            {description && (
              <HeroDescription intent="bodyPrimary" active={!!active}>
                {description}
              </HeroDescription>
            )}
          </HeroContent>
        </AppCardAction>
      </HeroCardRoot>
    );
  }
);

AppHeroCard.displayName = "AppHeroCard";
