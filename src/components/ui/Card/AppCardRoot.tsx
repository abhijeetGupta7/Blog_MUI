import Card, { type CardProps } from "@mui/material/Card";
import { styled } from "@mui/material/styles";

export interface AppCardRootProps extends CardProps {
  interactive?: boolean;
}

export const AppCardRoot = styled(Card, {
  shouldForwardProp: (prop) => prop !== "interactive",
})<AppCardRootProps>(({ theme, interactive = false }) => ({
  // 1. Layout & Shape
  height: "100%",
  display: "flex",
  flexDirection: "column",
  // Safety check: ensure radius is a number before math
  borderRadius: (Number(theme.shape?.borderRadius) || 4) * 4,
  border: `1px solid ${theme.palette.divider}`,
  
  // This ensures the card animates at the same speed as your Buttons/Inputs
  transition: theme.transitions.create(
    ["transform", "box-shadow", "border-color"], 
    {
      duration: theme.transitions.duration.short, // ~250ms
      easing: theme.transitions.easing.easeInOut,
    }
  ),

  // 3. Interactive State
  ...(interactive && {
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-4px)",
      // Use theme shadow if available, else a polished fallback
      boxShadow: theme.shadows?.[6] ?? "0 12px 24px -4px rgba(0,0,0,0.12)",
      borderColor: theme.palette.primary.main,
    },
  }),
}));

export default AppCardRoot;