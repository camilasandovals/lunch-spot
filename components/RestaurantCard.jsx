import { View, Text, Image, StyleSheet} from 'react-native'

export default function RestaurantCard({food}) {
    return(
        <View style={styles.card}>
            <Text style= {styles.name}>{food.name}</Text>
            <Image style= {styles.img} source={{ uri: food.image}} />
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        marginBottom: 4
    },
    img: {
        width: 340,
        height: 200, 
        borderRadius: 6
    },
    card: {
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 8,
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#646D7E',
        borderWidth: 2,

    }
})