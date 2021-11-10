import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import colors from "../theme/colors";

const { width, height } = Dimensions.get("screen");

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.heading}>Simply</Text>
        <Text style={styles.description}>
          Select your photographer, then go to session!
        </Text>
      </View>

      <Image
        resizeMode="contain"
        source={require("../../assets/illustration/onboarding.png")}
        style={{ marginBottom: 60 }}
      />

      <View style={styles.buttonWrapper}>
        <PrimaryButton text="Sign In" style={styles.buttonStyle} />
        <SecondaryButton text="Sign Up" style={styles.buttonStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  contentWrapper: {
    marginBottom: 80,
    width: width * 0.6,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: "PoppinsBold",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "PoppinsMedium",
    color: colors.secondary_two,
  },
  buttonWrapper: {
    width: "100%",
    paddingVertical: 40,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: { width: "47%" },
});

export default OnboardingScreen;
