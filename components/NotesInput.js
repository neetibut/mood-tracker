import React, { useState } from "react"
import { View, TextInput, Text, StyleSheet } from "react-native"

const NotesInput = () => {
  const [value, onChangeText] = useState("Make a note about your mood")

  return (
    <View>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={{ padding: 10, color: "gray" }}
      />
    </View>
  )
}

export default NotesInput

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
