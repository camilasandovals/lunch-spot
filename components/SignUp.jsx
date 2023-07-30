import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  const [email, onChangeEmail] = React.useState('') 
  const [password, onChangePassword] = React.useState('')
  const navigation = useNavigation()

  
  return (
    <SafeAreaView style = {styles.container}>
      <LinearGradient
        colors={["rgba(0, 0, 25, 1)", "rgba(10, 10, 35, 0.95)"]}
        style={styles.overlay}
      />
      <View style = {styles.form}>
        <Text style={styles.title}>Create New Account</Text>
        <TextInput style={styles.input}
        onChangeText={onChangeEmail}
        placeholder="Email"
        value={email}
        placeholderTextColor='#aaa'/>
        <TextInput style = {styles.input}
        onChangeText={onChangePassword}
        placeholderTextColor='#aaa'
        placeholder="Password"
        value={password}
        secureTextEntry/>
        <TouchableOpacity onPress = {() => navigation.navigate("Restaurant")}style = {styles.button}>
          <Text style = {styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style = {styles.signUp}>Already Have an account?</Text>
        <Button color="#20A850" title = "Login" onPress={() => navigation.navigate('Login')}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  form: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  },
  title:  {
  fontSize: 40,
  fontWeight: 600,
  color: '#fff',
  textAlign: 'center',
  marginBottom: 50,
  marginHorizontal: 30
  },
  input: {
    height: 50,
    width: "80%",
    margin: 12,
    fontSize: 18,
    color: '#fff',
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingHorizontal: 5
  },
  button: {
    height: 50,
    backgroundColor: '#20A850',
    borderRadius: 25,
    margin: 12,
    justifyContent: 'center',
    marginVertical: 50,
    width: "80%"
  },

  buttonText: {
    fontSize: 25,
    fontWeight: 700,
    textAlign: 'center',
    color: '#fff'
  },
  signUp: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
})