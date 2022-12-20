import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LoginScreen from "./screens/LoginScreen"
import SignupScreen from "./screens/SignupScreen"
import MoodScreen from "./screens/MoodScreen"

const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MoodLog" component={MoodScreen} />
    </Stack.Navigator>
  )
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
      <Navigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F0F0",
  },
})
