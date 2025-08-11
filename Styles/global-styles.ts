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
    fontSize: 60,
    fontWeight: "300",
    textAlign: "right",
  },

  secondaryResult: {
    color: Colors.textSecondary,
    fontSize: 30,
    textAlign: "right",
  },

  row:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:5,
    paddingHorizontal:0,
    gap:10,
  },

  button: {
    backgroundColor: Colors.buttonSecondary,
    borderRadius: 100,
    margin: 5,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: Colors.textTertiary,
    fontSize: 24,
    fontFamily: "SpaceMono",
    fontWeight: "300",
  },
});