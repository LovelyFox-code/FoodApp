import React from "react";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function IconButton({ onPress }) {
  return (
    <Pressable>
      <Ionicons name="heart" size={24} color="red" onPress={onPress} />
    </Pressable>
  );
}
