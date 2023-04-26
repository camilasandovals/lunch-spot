import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
import RestaurantList from './components/RestaurantList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantDetails from './components/RestaurantDetails';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title: "Restaurant List"}}component= {RestaurantList}/>
        <Stack.Screen name= "Details" component={RestaurantDetails} />
      
      </Stack.Navigator>

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
