import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

/**
 * SectionDivider - A reusable divider with consistent spacing.
 * Use this to separate sections within forms, cards, or page content.
 */
export const SectionDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

SectionDivider.displayName = "SectionDivider";
