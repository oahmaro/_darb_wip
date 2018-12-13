import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native'
import { getLocalData } from '../../utils/api'

export default class SplashScreen extends Component {
  componentDidMount() {
    const localData = getLocalData()

    setTimeout(() => {
      this.props.navigation.navigate(localData.accessToken ? 'App' : 'Auth')
    }, 1000)
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.handleScreenClick}>
        <View style={styles.contianer}>
          <View
            style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={styles.logo}
              source={require('../../utils/images/logo.png')}
            />
          </View>

          <View style={{ marginBottom: 15, flex: 1 }}>
            <View style={styles.footer}>
              <Image
                style={styles.copywriteLogo}
                source={require('../../utils/images/flag.png')}
              />
              <Text style={{ fontFamily: 'NotoKufiArabic_Regular' }}>
                حكومتي بخدمتي
              </Text>
            </View>
            <Text
              style={{ fontFamily: 'NotoKufiArabic_Regular', fontSize: 10 }}>
              جميع الحقوق محفوظة © حكومتي بخدمتي
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
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
