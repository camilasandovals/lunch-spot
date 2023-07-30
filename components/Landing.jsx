import { ImageBackground, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Login from "./Login";

const image = {uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}

export default function Landing() {
  return(
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* Semi-transparent overlay */}
        <View style={styles.overlay} />
        
        <View style={styles.content}>
          <Text style={styles.title}>Discovering delicious and 
          <Text style={styles.greenText}> local </Text>food</Text>
          <TouchableOpacity
            onPress={Login}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={Login}
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
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  content: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    margin: 20,
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
    color: 'green'
  },
  button: {
    marginTop: 30,
    backgroundColor: 'green',
    padding: 15,
    height: 60,
    width: 300,
    borderRadius: 10
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
    width: 300,
    borderRadius: 10
  },
  secondaryButtonText: {
    color: 'green',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 700
  }
})