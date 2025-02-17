import React, { createContext, useContext, useEffect } from "react";
import { useColorScheme } from "react-native";
import { useThemeStore } from "@/store/theme";
import { ThemeContextType } from "@/types/theme"; // Import the type

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = useColorScheme();
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (systemTheme) {
      useThemeStore.setState({ theme: systemTheme as "light" | "dark" });
    }
  }, [systemTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
