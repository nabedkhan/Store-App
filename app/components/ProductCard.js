import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../theme/colors";

const { width } = Dimensions.get("screen");

const ProductCard = ({ item }) => {
  return (
    <View>
      <View style={styles.imageBox}>
        <Image source={item.image} style={{ width: 150, height: 150 }} />

        <TouchableOpacity activeOpacity={0.7} style={styles.icon}>
          <MaterialIcons name="favorite-border" size={22} color={colors.grey} />
        </TouchableOpacity>
      </View>

      <Text
        style={[
          styles.commonTextStyle,
          { color: colors.primary, marginTop: 10 },
        ]}
      >
        {item.category}
      </Text>
      <Text
        style={[
          styles.commonTextStyle,
          { color: colors.secondary, fontFamily: "PoppinsSemiBold" },
        ]}
      >
        {item.name}
      </Text>
      <Text style={[styles.commonTextStyle, { color: colors.grey }]}>
        USD {item.price}.00
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    padding: 10,
    borderRadius: 10,
    width: width * 0.4,
    height: width * 0.4,
    backgroundColor: colors.background_one,
  },
  commonTextStyle: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: "PoppinsBold",
  },
  icon: {
    top: 10,
    right: 10,
    position: "absolute",
  },
});

export default ProductCard;
