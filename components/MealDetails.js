import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Subtitle from "./typography/Subtitle";

export default function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration} MINUTES</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "white",
  },
});
