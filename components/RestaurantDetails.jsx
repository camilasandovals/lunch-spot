import { useContext } from "react" // added to useContext
import { StyleSheet, View, Text, Image } from "react-native"
import { RestaurantContext } from "../App"// added to useContext

export default function RestaurandDetails() {  

    const { selectedRestaurant } = useContext(RestaurantContext); // added to useContext

    return(
        <View style={styles.main}>
            <Image style = {styles.img} source={{uri: selectedRestaurant.image}} />
            <Text style = {styles.title}>{selectedRestaurant.name}</Text>
            <View style = {styles.meta}>
                <Text>Cuisine: {selectedRestaurant.cuisine}</Text>
                <Text>Raiting: {selectedRestaurant.rating.toFixed(1)}⭐️</Text>
            </View>
            <Text style = {styles.address}>{selectedRestaurant.address}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    meta: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    address: {
        fontSize: 15
    },
    img: {
        width: 420,
        height: 280,
        borderRadius: 6,

    },
    title: {
        fontSize: 32,
        fontWeight: 700,
        marginVertical: 16,

    }
    ,
    main:{
        flex: 1,
        backgroundColor: 'lightgray',
        width: '100%',
        alignItems: 'center',
        padding: 19,

    },
})