import React from "react";
import { Text, View, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

//func to keep code jsx cleaner

export default function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("Meals Overview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <View>
      <FlatList
        key={"_"}
        data={CATEGORIES}
        keyExtractor={(item) => "_" + item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}
