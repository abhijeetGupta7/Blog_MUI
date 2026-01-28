import { styled } from "@mui/material/styles";
import { AppCardMedia } from "../AppCardMedia";
import type { CardMediaProps } from "@mui/material";

interface HeroImageProps extends CardMediaProps {
    active?:boolean,
}

export const HeroImage = styled(AppCardMedia, {
  shouldForwardProp: (prop) => prop !== "active",
})<HeroImageProps>(({ active }) => ({
  transform: active ? "scale(1.15)" : "scale(1)",
  transition: "transform 800ms cubic-bezier(0.2, 0, 0, 1)",
}));

HeroImage.displayName = "HeroImage";
