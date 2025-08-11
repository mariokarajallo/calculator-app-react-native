import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/Styles/global-styles";
import * as Haptics from "expo-haptics";
import { Pressable, Text } from "react-native";

interface CalculatorButtonProps {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleWidth?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  onPress,
  color = Colors.buttonSecondary,
  blackText = false,
  doubleWidth = false,
}: CalculatorButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleWidth ? 150 : 70,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
