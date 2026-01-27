import { styled } from "@mui/material/styles";
import { AppButton } from "../Button/AppButton";

/**
 * DrawerNavButton - left-aligned nav button used inside drawers
 */
export const DrawerNavButton = styled(AppButton)(() => ({
  justifyContent: "flex-start",
}));

DrawerNavButton.displayName = "DrawerNavButton";
