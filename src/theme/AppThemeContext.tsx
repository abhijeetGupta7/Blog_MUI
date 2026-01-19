import { createContext, useContext } from "react";

export interface AppThemeContextType {
  mode: "light" | "dark";
  toggleThemeMode: () => void;
}

export const AppThemeContext = createContext<AppThemeContextType | undefined>(undefined);

// Custom Hook
export const useAppTheme = () => {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error(
      "useAppTheme must be used within an AppThemeProvider"
    );
  }

  return context;
};
