import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_LIST } from "../storageConfig";

export type Meal = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  inDiet: boolean;
};

export async function FoodGetAll() {
  try {
    const storage = await AsyncStorage.getItem(FOOD_LIST);

    const foods: Meal[] = storage ? JSON.parse(storage) : [];

    return foods;
  } catch (err) {
    console.error("Erro ao buscar as refeições:", err);
    throw new Error("Não foi possível obter as refeições.");
  }
}
