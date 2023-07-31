import { useContext } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { UserContext } from "../App";

export default function Profile() {
  const { setUserLoggedIn } = useContext(UserContext)
  
  const handleLogout = () => {
    setUserLoggedIn(false)
  }
  return(
    <SafeAreaView style = {styles.container}>
      <Button onPress={handleLogout} title="Logout"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})