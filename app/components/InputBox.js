import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../theme/colors";

const InputBox = ({
  handleChange,
  icon = "email",
  placeholder = "Email",
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={22} color={colors.grey} />
      <TextInput
        onChangeText={handleChange}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderColor: colors.grey,
  },
  input: {
    flexGrow: 1,
    fontSize: 12,
    marginLeft: 5,
    fontFamily: "PoppinsMedium",
  },
});

export default InputBox;
