import { create } from "zustand";
import { ThemeState } from "@/types/theme";

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));
