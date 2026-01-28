import { styled, alpha } from "@mui/material/styles";

export const HeroOverlay = styled("div")({
    position: "absolute",
    inset: 0,
    background: `linear-gradient(to top, ${alpha("#000", 0.85)} 0%, transparent 60%)`,
    pointerEvents: "none",
});