import { ImageBackground, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Login from "./Login";
import Signup from "./SignUp";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const image = {uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}

export default function Landing() {
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <LinearGradient
        colors={["rgba(0, 0, 25, 0.9)", "rgba(0, 0, 25, 0.5)"]} // Adjust the second color here
        style={styles.overlay}
      />
        
        <View style={styles.content}>
          <Text style={styles.title}>Discovering delicious and 
          <Text style={styles.greenText}> local </Text>food</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={styles.secondaryButton}
          >
            <Text style={styles.secondaryButtonText}>Sign up</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,

  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    height: '100%',
    alignItems: 'center',
    margin: 20,
    marginTop: 180
  },
  title: {
    fontSize: 68,
    fontWeight: 'bold',
    opacity: 1,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 10,
    marginBottom: 50,
  },
  greenText: {
    color: '#20A850'
  },
  button: {
    marginTop: 30,
    backgroundColor: '#20A850',
    padding: 15,
    height: 60,
    width: '95%',
    borderRadius: 30
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 700
  },
  secondaryButton: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 15,
    height: 60,
    width: '95%',
    borderRadius: 30
  },
  secondaryButtonText: {
    color: '#20A850',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 700
  }
})