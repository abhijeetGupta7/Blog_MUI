import CardMedia, { type CardMediaProps } from "@mui/material/CardMedia";
import Box, { type BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

// 1. Rename to "Container" and extend Box for flexibility (sx, height, etc.)
export const AppCardMediaContainer = styled(Box)<BoxProps>({
  overflow: "hidden",
  width: "100%",
  flexShrink: 0,
  position: "relative", // Allows absolute positioning of badges inside if needed
});

// 2. The Media Component
export const AppCardMedia = styled(CardMedia)<CardMediaProps>(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
  display: "block", // Removes the tiny 4px gap under images
  
  // Theme-aware transition matching AppCardRoot
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.standard, // ~300ms (slightly slower for smooth zoom)
  }),
  
  // Target the inner <img> if MUI renders one
  "&.MuiCardMedia-root, & .MuiCardMedia-img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.standard,
    }),
  },
})) as typeof CardMedia;

export default AppCardMedia;