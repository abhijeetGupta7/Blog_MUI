// For external links with page refresh
import Link, { type LinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export const AppExternalLink = styled(Link)<LinkProps>(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  cursor: "pointer",

  "&:hover": {
    textDecoration: "underline",
  },
}));
