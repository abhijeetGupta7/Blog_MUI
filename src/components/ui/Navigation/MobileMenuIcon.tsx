import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

/**
 * MobileMenuIcon - Icon button for mobile menu toggle.
 * Visible only on mobile, hidden on sm breakpoint and above.
 */
export const MobileMenuIcon = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

MobileMenuIcon.displayName = "MobileMenuIcon";
