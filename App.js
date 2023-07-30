import { createContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import BottomTabNavigator from "./components/TabNavigator";

const Stack = createNativeStackNavigator();

export const RestaurantContext = createContext();

export default function App() {
  const [ selectedRestaurant, setSelectedRestaurant] = useState()
  return (
    <NavigationContainer>
      <RestaurantContext.Provider value = {{selectedRestaurant, setSelectedRestaurant}}>
        <BottomTabNavigator />
      </RestaurantContext.Provider>

      {/* <View style={styles.container}>
      <RestaurantList />
        
      </View> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'skyblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
