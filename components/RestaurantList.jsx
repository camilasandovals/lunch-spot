import { useState, useEffect } from 'react'
import { ScrollView,View, Text, StyleSheet } from 'react-native'
import RestaurantCard from './RestaurantCard'

export default function RestaurantList({navigation}) {

    const [foodList, setFoodList] = useState()
    useEffect(() => {
        fetch('https://my-first-firestore-bc.web.app/restaurants')
        .then(resp => resp.json())
        .then(setFoodList)
        .catch(alert)
    }, [])
    return (
        
        <View style={styles.container}>
            {/* <Text style={styles.title}>Restaurant List</Text> */}
            <ScrollView styles = {styles.list}>
            {foodList && foodList.map(food => (
                // <Text>{food.name}</Text> //check it is working
                <RestaurantCard food={food} key={food.id} navigation={navigation}/>
            ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 700,
        color: '#151B54',
        marginVertical: 8

    }, 
    list: {
        width: '100%',
        // borderColor: 'red',
        // borderWidth: 2,

    },
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        // marginTop: 70,
        // marginBottom: 24,
        width: "100%", //before 90%
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 15
    }
})