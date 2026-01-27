import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";

/**
 * FooterLink - Styled link component for footer navigation.
 * Provides consistent spacing and styling for footer links.
 */
export const FooterLink = styled(Link)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

FooterLink.displayName = "FooterLink";
