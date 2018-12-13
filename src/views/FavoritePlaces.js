import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class FavoritePlaces extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FavoritePlaces</Text>
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
