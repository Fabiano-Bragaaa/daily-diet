import { Meal } from "../storage/Food/foodGetAll";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Create: undefined;
      FinishCreate: undefined;
      FinishCreateNo: undefined;
      Details: {
        percentage: number;
        maxSequence: number;
        totalMeals: number;
        inDietMeals: number;
        outOfDietMeals: number;
      };
      MealDetails: { meal: Meal };
      MealEdit: { meal: Meal };
    }
  }
}
