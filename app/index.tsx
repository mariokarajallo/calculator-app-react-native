import { globalStyles } from "@/Styles/global-styles";
import React from "react";
import { Text, View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={globalStyles.mainResult}>0</Text>
      <Text style={globalStyles.secondaryResult}>0</Text>
    </View>
  );
};

export default CalculatorApp;
