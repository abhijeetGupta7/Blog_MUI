import { styled } from "@mui/material/styles";
import AppCardRoot from "../AppCardRoot";

export const HeroCardRoot = styled(AppCardRoot, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  minWidth: 300,
  height: 520,
  flexShrink: 0,
  scrollSnapAlign: "center",
  position: "relative",
  overflow: "hidden",

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