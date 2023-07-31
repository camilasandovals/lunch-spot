import { useState, useEffect } from 'react'
import { ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native'
import RestaurantCard from './RestaurantCard'
import { SearchBar } from 'react-native-screens'
import { useNavigation } from '@react-navigation/native';

export default function RestaurantList() {
    const [foodList, setFoodList] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation()
  
    useEffect(() => {
      fetch('https://my-first-firestore-bc.web.app/restaurants')
        .then(resp => resp.json())
        .then(setFoodList)
        .catch(alert);
    }, []);
    
    const filteredFoodList = foodList
      ? foodList.filter(food =>
          food.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];
  
    // Exclude the first item from the filteredFoodList
    const filteredFoodListWithoutFirst = filteredFoodList.slice(1);
        
    const handleRestaurantSelection = (food) => {
        setSelectedRestaurant(food);
        navigation.navigate("Details"); // Navigate to the "Details" screen
      };
      
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          placeholder="Search restaurants..."
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
        />
          
        <ScrollView contentContainerStyle={styles.list}>
        {filteredFoodList.map((food) => (
        <RestaurantCard
            food={food}
            key={food.id}
            onSelectRestaurant={() => handleRestaurantSelection(food)} // Pass the prop here
        />
        ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
  

  const styles = StyleSheet.create({
    image: {
      height: 350,
      width: '100%',
    },
    list: {
      width: '100%',
      alignItems: 'center',
      paddingBottom: 15,
    },
    container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 25, 1)',
      width: '100%', //before 90%
    },
  })
  
  