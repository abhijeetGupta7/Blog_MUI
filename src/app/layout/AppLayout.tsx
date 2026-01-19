import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Button,
    Container,
  } from "@mui/material";
  import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
  import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
  import { Link as RouterLink, Outlet } from "react-router-dom";
  import { useAppTheme } from "../../theme/AppThemeContext";
  
  export default function AppLayout() {
    const { mode, toggleThemeMode } = useAppTheme();
  
    return (
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* AppBar */}
        <AppBar position="sticky" color="default" elevation={1}>
          <Toolbar>
            {/* Brand */}
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                flexGrow: 1,
                fontWeight: 600,
              }}
            >
              MyBlog
            </Typography>
  
            {/* Navigation */}
            <Button component={RouterLink} to="/" color="inherit">
              Home
            </Button>
  
            <Button component={RouterLink} to="/signin" color="inherit">
              Sign In
            </Button>
  
            {/* Theme toggle */}
            <IconButton onClick={toggleThemeMode} sx={{ ml: 1 }}>
              {mode === "dark" ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
  
        {/* Main content */}
        <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
          <Outlet /> 
        </Container>
      </Box>
    );
  }
  