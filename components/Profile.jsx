import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export default function Profile({setUserLoggedIn}) {

  const handleLogout = () => {
    setUserLoggedIn(false)
  }

  return(
    <SafeAreaView style = {styles.container}>
      <Button onPress={handleLogout}>Logout</Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})