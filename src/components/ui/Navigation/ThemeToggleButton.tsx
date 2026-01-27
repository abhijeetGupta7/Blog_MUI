import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

/**
 * ThemeToggleButton - Icon button for theme toggle.
 * Provides consistent spacing for theme switcher.
 */
export const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

ThemeToggleButton.displayName = "ThemeToggleButton";
