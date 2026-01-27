import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import { AppStack } from "../ui/layout";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Link as RouterLink } from "react-router-dom";
import { AppTypography } from "../ui/Typography/AppTypography";
import { AppButton } from "../ui/Button/AppButton";
import { useAppTheme } from "../../theme/AppThemeContext";
import {
  DrawerContent,
  DesktopMenu,
  MobileMenuIcon,
  ThemeToggleButton,
  NavLink,
} from "../ui/Navigation";
import { DrawerNavButton } from "../ui/Navigation/DrawerNavButton";

function AppHeader() {
  const { mode, toggleThemeMode } = useAppTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const drawerContent = (
    <DrawerContent>
      <AppStack gap="sm">
        <AppTypography intent="headingSmall">Menu</AppTypography>

        {/* Mobile Links - Stacked Vertically */}
        <DrawerNavButton component={RouterLink} to="/" intent="ghost" onClick={handleLinkClick}>
          Home
        </DrawerNavButton>
        <DrawerNavButton component={RouterLink} to="/create-post" intent="ghost" onClick={handleLinkClick}>
          Create
        </DrawerNavButton>
        <DrawerNavButton component={RouterLink} to="/signin" intent="ghost" onClick={handleLinkClick}>
          Sign In
        </DrawerNavButton>
        <DrawerNavButton component={RouterLink} to="/profile" intent="ghost" onClick={handleLinkClick}>
          Profile
        </DrawerNavButton>
      </AppStack>
    </DrawerContent>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        {/* LOGO */}
        <NavLink intent="headingSmall" component={RouterLink} to="/">
          MyBlog
        </NavLink>

        {/* DESKTOP MENU */}
        <DesktopMenu>
          <AppButton component={RouterLink} to="/" intent="ghost">
            Home
          </AppButton>
          <AppButton component={RouterLink} to="/create-post" intent="ghost">
            Create
          </AppButton>
          <AppButton component={RouterLink} to="/signin" intent="ghost">
            Sign In
          </AppButton>
          <AppButton component={RouterLink} to="/profile" intent="ghost">
            Profile
          </AppButton>
        </DesktopMenu>

        {/* THEME TOGGLE */}
        <ThemeToggleButton onClick={toggleThemeMode}>
          {mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </ThemeToggleButton>

        {/* MOBILE MENU ICON */}
        <MobileMenuIcon
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </MobileMenuIcon>

        {/* MOBILE DRAWER COMPONENT */}
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(AppHeader);
