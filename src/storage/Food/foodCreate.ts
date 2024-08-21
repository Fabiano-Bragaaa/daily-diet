import AsyncStorage from "@react-native-async-storage/async-storage";
import { FoodGetAll, Meal } from "./foodGetAll";
import { FOOD_LIST } from "../storageConfig";

export async function FoodCreate(newMeal: Meal) {
  try {
    const storedMeals = await FoodGetAll();

    const updatedMeals = storedMeals ? [...storedMeals, newMeal] : [newMeal];
    const storage = JSON.stringify(updatedMeals);
    await AsyncStorage.setItem(FOOD_LIST, storage);
  } catch (err) {
    console.log(err);
    throw new Error("Não foi possível salvar a refeição.");
  }
}
