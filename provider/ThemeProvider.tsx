import { createContext, useContext, ReactNode } from "react";
import { useThemeStore } from "@/store/theme";

const ThemeContext = createContext(useThemeStore.getState());

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useThemeStore();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
