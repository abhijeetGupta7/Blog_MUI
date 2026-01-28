import { styled } from "@mui/material/styles";
import { AppBox } from "../../layout";

/**
 * HeroTopContent - Container for top content in hero cards.
 * Provides consistent bottom margin for badges, chips, etc.
 */
export const HeroTopContent = styled(AppBox)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

HeroTopContent.displayName = "HeroTopContent";
