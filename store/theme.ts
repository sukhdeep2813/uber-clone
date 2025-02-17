import { create } from "zustand";
import { Theme } from "@/types/theme";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}
export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
