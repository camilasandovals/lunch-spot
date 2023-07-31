// App.js

import React, { createContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import BottomTabNavigator from "./components/TabNavigator";
import Landing from "./components/Landing";
import Signup from "./components/SignUp";
import RestaurantDetails from "./components/RestaurantDetails";

const Stack = createNativeStackNavigator();

export const RestaurantContext = createContext();
export const UserContext = createContext();

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState(false); 

  return (
    <NavigationContainer>
      <UserContext.Provider value={{ setUserLoggedIn }}>
        <RestaurantContext.Provider value={{ selectedRestaurant, setSelectedRestaurant }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {userLoggedIn ? (
              <>
                <Stack.Screen name="Home" component={BottomTabNavigator} />
                <Stack.Screen name="Details" component={RestaurantDetails} />
              </>
            ) : (
              <>
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={Signup} />
              </>
            )}
          </Stack.Navigator>
        </RestaurantContext.Provider>
      </UserContext.Provider>
    </NavigationContainer>
  );
}
