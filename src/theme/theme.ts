import { createTheme } from "@mui/material";

export function createAppTheme(mode: "light" | "dark") {
  return createTheme({
    palette:{
      mode,
    },
  });
}