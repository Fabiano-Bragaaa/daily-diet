import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal, FoodGetAll } from "./foodGetAll";
import { FOOD_LIST } from "../storageConfig";

export async function FoodEdit(updatedMeal: Meal) {
  try {
    const storedMeals = await FoodGetAll();

    const updatedMeals = storedMeals.map((meal) =>
      meal.id === updatedMeal.id ? updatedMeal : meal
    );

    const storage = JSON.stringify(updatedMeals);

    await AsyncStorage.setItem(FOOD_LIST, storage);

  } catch (err) {
    console.log(err);
    throw new Error("Não foi possível editar a refeição.");
  }
}
