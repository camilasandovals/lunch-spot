import { useContext } from "react" // added to useContext
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import { RestaurantContext } from "../App"// added to useContext

export default function RestaurantDetails() {  

    const { selectedRestaurant } = useContext(RestaurantContext); // added to useContext

    return(
        <View style={styles.main}>
            <Image style = {styles.img} source={{uri: selectedRestaurant?.image}} />
            <Text style = {styles.title}>{selectedRestaurant?.name}</Text>
            <View style = {styles.meta}>
                <Text style = {styles.info}>Cuisine: {selectedRestaurant?.cuisine}</Text>
                <Text style = {styles.info}>Raiting: {selectedRestaurant?.rating.toFixed(1)}⭐️</Text>
            </View>
            <Text style = {styles.address}>{selectedRestaurant?.address}</Text>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    meta: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    address: {
        fontSize: 18,
        color: '#fff'
    },
    img: {
        width: '100%',
        height: 480,
    },
    title: {
        fontSize: 32,
        fontWeight: 700,
        marginVertical: 16,
        color: '#fff',
        marginVertical: 40
    },
    info: {
        color: '#fff',
        fontSize: 18
    }
    ,
    main:{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 25, 1)',
        width: '100%',
        alignItems: 'center',
    },
    button: {
        height: 50,
        backgroundColor: '#20A850',
        borderRadius: 25,
        margin: 12,
        justifyContent: 'center',
        marginVertical: 50,
        width: "90%"
      },
      buttonText: {
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'center',
        color: '#fff'
      },
})