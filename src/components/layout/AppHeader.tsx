import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer"; 
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack"; 
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Link as RouterLink } from "react-router-dom";

import { AppTypography } from "../ui/Typography/AppTypography";
import { AppButton } from "../ui/Button/AppButton";
import { useAppTheme } from "../../theme/AppThemeContext";

function AppHeader() {
  const { mode, toggleThemeMode } = useAppTheme();
  
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  // 4. Content inside the Mobile Drawer
  const drawerContent = (
    <Box sx={{ width: 250, p: 2, pt: 4 }}>
      <Stack spacing={2}>
        <AppTypography intent="headingSmall" sx={{ mb: 2, px: 1 }}>
          Menu
        </AppTypography>
        
        {/* Mobile Links - Stacked Vertically */}
        <AppButton component={RouterLink} to="/" intent="ghost" onClick={handleLinkClick} sx={{ justifyContent: "flex-start" }}>
          Home
        </AppButton>
        <AppButton component={RouterLink} to="/create-post" intent="ghost" onClick={handleLinkClick} sx={{ justifyContent: "flex-start" }}>
          Create
        </AppButton>
        <AppButton component={RouterLink} to="/signin" intent="ghost" onClick={handleLinkClick} sx={{ justifyContent: "flex-start" }}>
          Sign In
        </AppButton>
        <AppButton component={RouterLink} to="/profile" intent="ghost" onClick={handleLinkClick} sx={{ justifyContent: "flex-start" }}>
          Profile
        </AppButton>
      </Stack>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        {/* LOGO */}
        <AppTypography
          intent="headingSmall"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", flexGrow: 1, fontWeight: 600 }}
        >
          MyBlog
        </AppTypography>

        {/* DESKTOP MENU */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
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
        </Box>

        {/* THEME TOGGLE */}
        <IconButton onClick={toggleThemeMode} sx={{ ml: 1 }}>
          {mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </IconButton>

        {/* MOBILE MENU ICON (Visible only on XS) */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ ml: 1, display: { sm: 'none' } }} 
        >
          <MenuIcon />
        </IconButton>

        {/* MOBILE DRAWER COMPONENT */}
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better: open performance on mobile
          }}
        >
          {drawerContent}
        </Drawer>

      </Toolbar>
    </AppBar>
  );
}

export default React.memo(AppHeader);