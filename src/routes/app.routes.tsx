import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { Create } from "../screens/Create";
import { FinishCreate } from "../screens/FinishCreate";
import { FinishCreateNo } from "../screens/FinishCreateNo";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
      <Screen name="FinishCreate" component={FinishCreate} />
      <Screen name="FinishCreateNo" component={FinishCreateNo} />
      <Screen name="Create" component={Create} />
    </Navigator>
  );
}
