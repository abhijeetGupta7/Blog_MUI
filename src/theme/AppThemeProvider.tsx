import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
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
  const getInitialMode = () => {
    const storedMode = localStorage.getItem(THEME_STORAGE_KEY);

    if (storedMode === "light" || storedMode === "dark") {
      return storedMode;
    }

    return prefersDarkMode ? "dark" : "light";
  };

  const [mode, setMode] = useState<"light" | "dark">(getInitialMode);

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
