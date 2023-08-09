import React from "react";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function IconButton({ onPress, isFavorite }) {
  return (
    <Pressable>
      <Ionicons
        name="heart"
        size={24}
        color={isFavorite ? "red" : "grey"}
        onPress={onPress}
      />
    </Pressable>
  );
}
