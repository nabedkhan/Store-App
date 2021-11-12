import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductCard from "../components/ProductCard";
import SecondaryButton from "../components/SecondaryButton";
import colors from "../theme/colors";

const DATA = [
  {
    id: 1,
    title: "Watches",
  },
  {
    id: 2,
    title: "Bracelets",
  },
  {
    id: 3,
    title: "Straps",
  },
  {
    id: 4,
    title: "Set",
  },
  {
    id: 5,
    title: "Shirt",
  },
];

const PRODUCTS = [
  {
    id: 1,
    price: 29,
    category: "Bracelets",
    name: "Black Rope Bracelet",
    image: require("../../assets/products/bracelet-1.png"),
  },
  {
    id: 2,
    price: 185,
    category: "Watches",
    name: "Kinsale Watch",
    image: require("../../assets/products/watch-1.png"),
  },
  {
    id: 3,
    price: 29,
    category: "Bracelets",
    name: "Black Rope Bracelet",
    image: require("../../assets/products/bracelet-1.png"),
  },
];

const { width } = Dimensions.get("screen");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>Select From Categories</Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Ionicons name="search" size={22} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={{ paddingLeft: 20 }}>
        <FlatList
          horizontal
          data={DATA}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <SecondaryButton
              text={item.title}
              style={styles.categoryBtnStyle}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ marginRight: 15 }} />}
        />
      </View>

      <View style={{ paddingLeft: 20, marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 20,
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "PoppinsBold",
              fontSize: 18,
              color: colors.secondary,
            }}
          >
            Most Selling
          </Text>
          <Text
            style={{
              fontFamily: "PoppinsBold",
              fontSize: 14,
              color: colors.primary,
            }}
          >
            View All
          </Text>
        </View>
        <FlatList
          horizontal
          data={PRODUCTS}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard item={item} />}
          ItemSeparatorComponent={() => <View style={{ marginRight: 25 }} />}
        />
      </View>

      <View style={{ paddingLeft: 20, marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 20,
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "PoppinsBold",
              fontSize: 18,
              color: colors.secondary,
            }}
          >
            Recent Added
          </Text>
          <Text
            style={{
              fontFamily: "PoppinsBold",
              fontSize: 14,
              color: colors.primary,
            }}
          >
            View All
          </Text>
        </View>
        <FlatList
          horizontal
          data={PRODUCTS}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard item={item} />}
          ItemSeparatorComponent={() => <View style={{ marginRight: 25 }} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headingText: {
    fontSize: 18,
    color: colors.secondary,
    fontFamily: "PoppinsBold",
  },
  categoryBtnStyle: {
    width: "auto",
    borderWidth: 1,
    borderRadius: 7,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
