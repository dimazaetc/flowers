import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "./src/screens/registration/RegistrationScreen";
import LoginScreen from "./src/screens/login/LoginScreen";
import SelectSizeScreen from "./src/screens/sizes/SelectSizeScreen";
import PeriodicityScreen from "./src/screens/periodicity/PeriodicityScreen";
import SettingsScreen from "./src/screens/settings/SettingsScreen";
import OrderScreen from "./src/screens/оrder/OrderScreen";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
import store from "./src/redux";
import ProfileScreen from "./src/screens/profile/ProfileScreen";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Comfortaa-Bold": require("./assets/fonts/Comfortaa-Bold.ttf"),
    "Comfortaa-Regular": require("./assets/fonts/Comfortaa-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          tabBar={() => null}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SelectSizeScreen" component={SelectSizeScreen} />
          <Stack.Screen
            name="PeriodicityScreen"
            component={PeriodicityScreen}
          />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="OrderScreen" component={OrderScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

          {/*<Stack.Screen name="LoginScreen" component={LoginScreen} />*/}
          {/*<Stack.Screen*/}
          {/*  name="RegistrationScreen"*/}
          {/*  component={RegistrationScreen}*/}
          {/*/>*/}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
