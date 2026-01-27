import { createTheme } from "@mui/material/styles";

export function createAppTheme(mode: "light" | "dark") {
  return createTheme({
    palette:{
      mode,
    },
    typography: {
      fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    }    
  });
}