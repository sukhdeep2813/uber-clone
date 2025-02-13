export interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

declare const theme: ThemeState;
export default theme;
