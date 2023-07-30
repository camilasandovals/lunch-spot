import { useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { RestaurantContext } from '../App'

export default function RestaurantCard({food, navigation}) {
    
    const { setSelectedRestaurant } = useContext(RestaurantContext)
    
    const chooseRestaurant = () => {
        setSelectedRestaurant(food)
        navigation.navigate('Details')
    }

    return(
        <TouchableOpacity onPress={chooseRestaurant}>
        <View style={styles.card}>
            <Text style= {styles.name}>{food.name}</Text>
            <Image style= {styles.img} source={{ uri: food.image}} />
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        marginBottom: 4
    },
    img: {
        width: '100%',
        height: 200, 
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        marginVertical: 8,
      
        borderRadius: 10,
        alignItems: 'center',
    }
})