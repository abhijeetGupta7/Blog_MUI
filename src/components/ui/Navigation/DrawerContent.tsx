import { styled } from "@mui/material/styles";
import { AppBox } from "../layout/AppBox";

/**
 * DrawerContent - Container for drawer/mobile menu content.
 * Provides consistent padding and width for navigation drawers.
 */
export const DrawerContent = styled(AppBox)(({ theme }) => ({
  width: 250,
  padding: theme.spacing(2),
  paddingTop: theme.spacing(4),
}));

DrawerContent.displayName = "DrawerContent";
