import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundPrimary,
  },

  calculatorContainer: {
    flex: 1,
    paddingBottom: 20,
    justifyContent: "flex-end",
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    fontWeight: "bold",
    textAlign: "right",
  },

  secondaryResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: "right",
  },
});