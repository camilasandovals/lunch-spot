import { useState, useEffect } from 'react'
import { ScrollView, Image, Text, StyleSheet, SafeAreaView } from 'react-native'
import RestaurantCard from './RestaurantCard'
import { SearchBar } from 'react-native-screens'


export default function Home() {


  return(
    <SafeAreaView style={styles.container}>
       <Text style={styles.title}>Welcome</Text>
        <Image style={styles.image} source={require('../assets/food.png')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fff',
    marginVertical: 8,
  },
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
