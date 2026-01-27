import { styled } from "@mui/material/styles";
import { AppTypography } from "../Typography/AppTypography";

/**
 * NavLink - Navigation link component for headers.
 * Provides consistent styling for logo/brand links.
 */
export const NavLink = styled(AppTypography)({
  textDecoration: "none",
  color: "inherit",
  flexGrow: 1,
  fontWeight: 600,
});

NavLink.displayName = "NavLink";
