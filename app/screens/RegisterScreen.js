import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputBox from "../components/InputBox";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../theme/colors";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={require("../../assets/logo/Logo.png")} />
      </View>

      <View style={{ flex: 0.6, alignItems: "center" }}>
        <InputBox icon="email" placeholder="Email Address" />
        <InputBox icon="cellphone" placeholder="Phone Number" />
        <InputBox icon="lock" placeholder="Password" secureTextEntry />
        <PrimaryButton text="Create an account" style={{ marginTop: 20 }} />

        <TouchableWithoutFeedback>
          <Text style={styles.alreadyBtn}>Already have an account?</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 40,
  },
  alreadyBtn: {
    fontSize: 14,
    textAlign: "center",
    color: colors.primary,
    fontFamily: "PoppinsSemiBold",
    marginTop: 20,
  },
  logoWrapper: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RegisterScreen;
