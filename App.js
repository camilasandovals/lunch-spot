import React, { createContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import BottomTabNavigator from "./components/TabNavigator";
import Landing from "./components/Landing";

const Stack = createNativeStackNavigator();

export const RestaurantContext = createContext();

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  // Dummy authentication check. Replace this with your actual authentication logic.
  const userLoggedIn = false; // Set to true if the user is logged in, false if not.

  return (
    <NavigationContainer>
      {userLoggedIn ? (
        <RestaurantContext.Provider
          value={{ selectedRestaurant, setSelectedRestaurant }}
        >
          <BottomTabNavigator />
        </RestaurantContext.Provider>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Landing} />
        </Stack.Navigator>
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
