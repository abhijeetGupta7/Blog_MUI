import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useAppTheme } from "../../theme/AppThemeContext";

export default function AppHeader() {
  const { mode, toggleThemeMode } = useAppTheme();

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", flexGrow: 1, fontWeight: 600 }}
        >
          MyBlog
        </Typography>

        <Button component={RouterLink} to="/" color="inherit">Home</Button>
        <Button component={RouterLink} to="/create-post" color="inherit">Create</Button>
        <Button component={RouterLink} to="/signin" color="inherit">Sign In</Button>
        <Button component={RouterLink} to="/profile" color="inherit">Profile</Button>

        <IconButton onClick={toggleThemeMode} sx={{ ml: 1 }}>
          {mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}