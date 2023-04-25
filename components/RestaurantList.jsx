import { ScrollView,View, Text, StyleSheet } from 'react-native'

export default function RestaurantList() {
    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Restaurant List</Text>
            <ScrollView styles = {styles.list}>

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
        borderColor: 'red'

    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 70,
        marginBottom: 24,
        width: "90%",
        alignItems: 'center',
        // justifyContent: 'flex-start'
    }
})