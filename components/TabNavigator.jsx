import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantList from "./RestaurantList";
import { Ionicons } from "@expo/vector-icons";
import Cart from "./Cart";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name = 'Home' component={RestaurantList}
      options={{
        tabBarIcon: ({color,size}) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
        headerShown: false
      }}></Tab.Screen>
      <Tab.Screen name = 'Cart' component={Cart}
      options={{
        tabBarIcon: ({color,size}) => (
          <Ionicons name="cart-outline" size={size} color={color} />
        ),
        headerShown: false
      }}></Tab.Screen>
      <Tab.Screen name = 'Profile' component={Profile}
      options={{
        tabBarIcon: ({color,size}) => (
          <Ionicons name="person-outline" size={size} color={color} />
        ),
        headerShown: false
      }}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;