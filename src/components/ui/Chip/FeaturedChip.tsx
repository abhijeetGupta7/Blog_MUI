import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

/**
 * FeaturedChip - Styled chip for featured content badges.
 * Provides white background with black text for featured labels.
 */
export const FeaturedChip = styled(Chip)({
  backgroundColor: "white",
  color: "black",
  fontWeight: 700,
});

FeaturedChip.displayName = "FeaturedChip";
