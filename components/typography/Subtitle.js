import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Subtitle({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>;
}
const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    margin: 6,
  },
});
