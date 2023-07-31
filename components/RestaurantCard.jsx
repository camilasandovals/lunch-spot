import { useContext } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { RestaurantContext } from '../App'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({food }) {
    const { setSelectedRestaurant } = useContext(RestaurantContext)
    const navigation = useNavigation();

    const chooseRestaurant = () => {
        setSelectedRestaurant(food)
        navigation.navigate('Details')
    }

    return(
        <TouchableOpacity onPress={chooseRestaurant} activeOpacity={0.8}>
        <View style={styles.card}>
          <ImageBackground style={styles.img} source={{ uri: food?.image }}>
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.8)']} // Add the desired gradient colors
              style={styles.gradient}
            />
            <Text style={styles.name}>{food?.name}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        marginBottom: 4,
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: '#fff',
        fontWeight: 500,
        
    },

    img: {
        width: '100%',
        height: 200, 
        borderRadius: 20,
        overflow: 'hidden'
    },

    card: {
        width: 350,
        backgroundColor: '#fff',
        marginVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        // shadowColor: '#fff',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        borderRadius: 20,
      }
})