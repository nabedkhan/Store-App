import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../theme/colors";

const SecondaryButton = ({ text, onPress, style }) => {
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
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderColor: colors.primary,
  },
  text: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: "PoppinsMedium",
  },
});

export default SecondaryButton;
