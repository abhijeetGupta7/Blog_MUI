import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { 
  AppCardRoot, 
  AppCardAction, 
  AppCardMedia, 
  AppCardMediaContainer, 
  AppCardContent, 
  AppCardTitle, 
  AppCardDescription 
} from "./ui/Card"; 

type AppCardProps = {
  title: string;
  description: string;
  image?: string;
  href: string;
};

function AppCard({ title, description, image, href }: AppCardProps) {
  return (
    <AppCardRoot elevation={1} interactive>
      <AppCardAction component={RouterLink} to={href}>
        
        <AppCardMediaContainer height={220}> 
          {image && (
            <AppCardMedia 
              component="img" 
              image={image} 
              alt={title} 
              loading="eager"
              fetchPriority="high" 
              height="100%"
            />
          )}
        </AppCardMediaContainer>

        <AppCardContent>
          <AppCardTitle intent="headingSmall" gutterBottom>
            {title}
          </AppCardTitle>

          <AppCardDescription intent="bodySecondary" clamp={3}>
            {description}
          </AppCardDescription>
        </AppCardContent>

      </AppCardAction>
    </AppCardRoot>
  );
}

export default React.memo(AppCard);