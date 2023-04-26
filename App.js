import { createContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View } from 'react-native';
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const RestaurantContext = createContext();

export default function App() {
  const [ selectedRestaurant, setSelectedRestaurant] = useState()
  return (
    <NavigationContainer>
      <RestaurantContext.Provider value = {{selectedRestaurant, setSelectedRestaurant}}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ title: "Restaurant List" }}
            component={RestaurantList}
          />
          <Stack.Screen name="Details" component={RestaurantDetails} />
        </Stack.Navigator>
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
