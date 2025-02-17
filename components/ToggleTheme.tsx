import { useThemeStore } from "@/store/theme";
import { TouchableOpacity, Image } from "react-native";
import { icons } from "@/constants";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Image
        source={theme === "dark" ? icons.white : icons.black}
        className="h-8 w-8"
      />
    </TouchableOpacity>
  );
};
export default ToggleTheme;
