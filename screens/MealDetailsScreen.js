import React, { useContext, useLayoutEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/typography/Subtitle";
import Title from "../components/typography/Title";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

export default function MealDetailsScreen({ route, navigation }) {
  const favoriteMealContext = useContext(FavoritesContext);
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealsFavorite = favoriteMealContext.ids.includes(mealId);
  console.log(mealsFavorite);
  const changeFavoriteStatusHandler = () => {
    if (mealsFavorite) {
      favoriteMealContext.removeFavorite(mealId);
    } else {
      favoriteMealContext.addFavorite(mealId);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            isFavorite={mealsFavorite}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return (
    <View>
      <ScrollView>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Title>{selectedMeal.title}</Title>
        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
        />
        <Subtitle style={{ color: "yellow" }}>Ingredients: </Subtitle>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text style={styles.list} key={ingredient}>
            - {ingredient}
          </Text>
        ))}
        <Subtitle>Steps</Subtitle>
        {selectedMeal.steps.map((step) => (
          <Text style={styles.list} key={step}>
            {step}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  list: {
    fontSize: 12,
    color: "white",
    padding: 2,
    marginHorizontal: 8,
  },
});
