import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppStore } from "./Context/Appcontext";
import { Home } from "./Components/Home";
import { Result } from "./Components/Result";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator<any>();
  return (
    <NavigationContainer>
      <AppStore>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </AppStore>
    </NavigationContainer>
  );
}
