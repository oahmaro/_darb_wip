import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ScreenE extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ScreenE</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
})
