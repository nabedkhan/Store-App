import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../theme/colors";

const PrimaryButton = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.container, style]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "PoppinsMedium",
  },
});

export default PrimaryButton;
