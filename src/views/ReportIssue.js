import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ReportIssue extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ReportIssue</Text>
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
