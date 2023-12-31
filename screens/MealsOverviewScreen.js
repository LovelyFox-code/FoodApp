import React, { useLayoutEffect } from "react";

import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOverviewScreen({ route, navigation }) {
  // useRoute possible to use https://reactnavigation.org/docs/use-route/
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}
