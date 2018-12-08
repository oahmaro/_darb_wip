import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SplashScreen = props => (
  <View style={styles.contianer}>
    <Image style={styles.logo} source={require('../utils/images/logo.jpg')} />
    <View style={{ marginBottom: 15 }}>
      <View style={styles.footer}>
        <Image
          style={styles.copywriteLogo}
          source={require('../utils/images/flag.jpg')}
        />
        <Text>حكومتي بخدمتي</Text>
      </View>
      <Text>جميع الحقوق محفوظة © حكومتي بخدمتي</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    flex: 1,
    width: 250,
    height: 250,
    resizeMode: 'contain'
  },
  copywriteLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  footer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SplashScreen
