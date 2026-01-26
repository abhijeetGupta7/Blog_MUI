import { styled } from "@mui/material/styles";
import { AppTypography, type AppTypographyProps } from "../Typography/AppTypography";

interface AppCardDescriptionProps extends AppTypographyProps {
  clamp?: number;
}

export const AppCardDescription = styled(AppTypography, {
  shouldForwardProp: (prop) => prop !== "clamp",
})<AppCardDescriptionProps>(({ theme, clamp = 3 }) => ({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: clamp, 
  color: theme.palette.text.secondary, // Default to secondary color
}));

export default AppCardDescription;