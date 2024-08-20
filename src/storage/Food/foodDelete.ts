import AsyncStorage from "@react-native-async-storage/async-storage";
import { FoodGetAll, Meal } from "./foodGetAll";
import { FOOD_LIST } from "../storageConfig";

export async function FoodDelete(id: string) {
  try {
    const allFood = await FoodGetAll();
    const food = allFood.filter((food) => food.id !== id);

    await AsyncStorage.setItem(FOOD_LIST, JSON.stringify(food));
  } catch (error) {
    console.error("Erro ao deletar o alimento:", error);
  }
}
