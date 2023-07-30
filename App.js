import React, { createContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import BottomTabNavigator from "./components/TabNavigator";
import Landing from "./components/Landing";
import Signup from "./components/SignUp";

const Stack = createNativeStackNavigator();

export const RestaurantContext = createContext();

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  const [userLoggedIn, setUserLoggedIn] = React.useState(false); 

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
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Login">
            {(props) => (
              // Pass userLoggedIn and setUserLoggedIn as props to the Login component
              <Login {...props} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
            )}
          </Stack.Screen>
          <Stack.Screen name="SignUp" component={Signup} />
        </Stack.Navigator>
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
