import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { Create } from "../screens/Create";
import { FinishCreate } from "../screens/FinishCreate";
import { FinishCreateNo } from "../screens/FinishCreateNo";
import { MealDetail } from "../screens/MealDetails";
import { MealEdit } from "../screens/MealEdit";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
      <Screen name="FinishCreate" component={FinishCreate} />
      <Screen name="FinishCreateNo" component={FinishCreateNo} />
      <Screen name="Create" component={Create} />
      <Screen name="MealDetails" component={MealDetail} />
      <Screen name="MealEdit" component={MealEdit} />
    </Navigator>
  );
}
