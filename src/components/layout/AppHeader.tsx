import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { AppStack, AppBox } from "../ui/layout"; 
import { AppTypography } from "../ui/Typography/AppTypography";
import { useAppTheme } from "../../theme/AppThemeContext";

import {
  DrawerContent,
  DesktopMenu,
  MobileMenuIcon,
  ThemeToggleButton,
  NavLink,
} from "../ui/Navigation";

import { DrawerNavButton } from "../ui/Navigation/DrawerNavButton";
import { AppNavLinkButton } from "../ui/Link/AppNavLinkButton";

function AppHeader() {
  const { mode, toggleThemeMode } = useAppTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const drawerContent = (
    <DrawerContent>
      <AppStack gap="sm">
        <AppTypography intent="headingSmall">Menu</AppTypography>
        <DrawerNavButton to="/" intent="ghost" onClick={handleLinkClick}>
          Home
        </DrawerNavButton>
        <DrawerNavButton to="/create-post" intent="ghost" onClick={handleLinkClick}>
          Create
        </DrawerNavButton>
        <DrawerNavButton to="/signin" intent="ghost" onClick={handleLinkClick}>
          Sign In
        </DrawerNavButton>
        <DrawerNavButton to="/profile" intent="ghost" onClick={handleLinkClick}>
          Profile
        </DrawerNavButton>
      </AppStack>
    </DrawerContent>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        
        <NavLink to="/">MyBlog</NavLink>

        <AppBox flexGrow={1} />

        <AppStack direction="row" alignItems="center" gap="sm">
          
          <DesktopMenu>
            <AppNavLinkButton to="/" intent="ghost">Home</AppNavLinkButton>
            <AppNavLinkButton to="/create-post" intent="ghost">Create</AppNavLinkButton>
            <AppNavLinkButton to="/signin" intent="ghost">Sign In</AppNavLinkButton>
            <AppNavLinkButton to="/profile" intent="ghost">Profile</AppNavLinkButton>
          </DesktopMenu>

          <ThemeToggleButton onClick={toggleThemeMode}>
            {mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </ThemeToggleButton>

          <MobileMenuIcon
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </MobileMenuIcon>
          
        </AppStack>

        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(AppHeader);