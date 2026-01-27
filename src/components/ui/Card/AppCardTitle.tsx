import { styled } from "@mui/material/styles";
import { AppTypography, type AppTypographyProps } from "../Typography/AppTypography";

// Extend AppTypographyProps to include our custom 'clamp'
interface AppCardTitleProps extends AppTypographyProps {
  clamp?: number;
}

export const AppCardTitle = styled(AppTypography, {
  shouldForwardProp: (prop) => prop !== "clamp",
})<AppCardTitleProps>(({ clamp = 2 }) => ({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: clamp, 
  
  // Default intent (can be overridden)
  // We don't set fontWeight here because AppTypography handles it via intent
}));

export default AppCardTitle;