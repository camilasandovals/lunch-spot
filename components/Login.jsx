import { Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Login() {
  return (
    <Text style={styles.title}>Login</Text>
  )
}

const styles = StyleSheet.create({
  title:  {
  fontSize: 30
  }
})