// DrawerNavButton.tsx
import { styled } from "@mui/material/styles";
import { AppNavLinkButton } from "../Link/AppNavLinkButton";

export const DrawerNavButton = styled(AppNavLinkButton)(() => ({
  justifyContent: "flex-start",
}));

DrawerNavButton.displayName = "DrawerNavButton";
