import { globalStyles } from "@/Styles/global-styles";
import { Text, type TextProps } from "react-native";

interface ThemeTextProps extends TextProps {
  variant?: "h1" | "h2";
}
const ThemeText = ({ children, variant, ...props }: ThemeTextProps) => {
  return (
    <Text
      style={[
        { color: "white" },
        { fontFamily: "SpaceMono" },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.secondaryResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
