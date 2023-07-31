import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Cart from "./Cart";
import Profile from "./Profile";
import Home from "./Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantList from './RestaurantList';
import RestaurantDetails from './RestaurantDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const RestaurantStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RestaurantList" component={RestaurantList} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#20A850",
        tabBarInactiveTintColor: "#ddd",
        tabBarStyle: { backgroundColor: "rgba(0, 0, 25, 1)", borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Restaurants"
        component={RestaurantStack} // Use the RestaurantStack here
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
