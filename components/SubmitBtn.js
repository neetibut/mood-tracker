import { View, Text, Button, StyleSheet } from "react-native"
import React from "react"

export default function SubmitBtn() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log("Log submitted!")
        }}
        title="SUBMIT"
        color="ghostwhite"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "seagreen",
  },
})
