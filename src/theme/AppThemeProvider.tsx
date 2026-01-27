import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo, useState } from "react";
import { createAppTheme } from "./theme";
import { AppThemeContext } from "./AppThemeContext";
import { THEME_STORAGE_KEY } from "../constants/common";

type AppThemeProviderProps = {
  children: React.ReactNode;
};

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  // Detect system preference mode
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // If theme mode already stored, use that otherwise use system mode
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const storedMode = localStorage.getItem(THEME_STORAGE_KEY);

    if (storedMode === "light" || storedMode === "dark") {
      return storedMode;
    }

    const systemMode = prefersDarkMode ? "dark" : "light";
    localStorage.setItem(THEME_STORAGE_KEY, systemMode);
    return systemMode;
  });

  const colorMode = useMemo(
    () => ({
      mode,
      toggleThemeMode: () => {
        setMode((prev) => {
          const next = prev === "light" ? "dark" : "light";
          localStorage.setItem(THEME_STORAGE_KEY, next);
          return next;
        });
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <AppThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export default AppThemeProvider;
