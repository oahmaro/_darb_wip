import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  TouchableNativeFeedback
} from 'react-native'
import PhoneInput from 'react-native-phone-input'

export default class ScreenA extends Component {
  state = {
    value: ''
  }
  render() {
    return (
      <View style={styles.contianer}>
        <Text
          style={{
            color: '#585858',
            marginLeft: 275,
            marginBottom: 15,
            fontSize: 16
          }}>
          رقم الهاتف
        </Text>
        <View style={styles.formContainer}>
          <PhoneInput
            style={{
              width: 200,
              marginTop: 20,
              marginBottom: 15,
              flexDirection: 'row-reverse',
              marginLeft: -100
            }}
            textStyle={{ color: '#585858', marginLeft: -10 }}
            flagStyle={{ width: 38, height: 20 }}
            initialCountry=""
            ref="phone"
            value="+962 "
          />
          <View
            style={{ backgroundColor: '#585858', height: 0.5, width: 300 }}
          />
          <Text
            style={{
              marginTop: 10,
              color: '#585858',
              fontSize: 12
            }}>
            سنقوم بإرسال رسالة نصية للتحقق من الرقم
          </Text>
        </View>
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View
            style={{
              marginTop: 12,
              width: 350,
              height: 50,
              backgroundColor: '#146AFF',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5
            }}>
            <Text style={{ color: 'white', fontSize: 16 }}>ارسل</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
          onPress={this._onPressButton}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View
            style={{
              marginTop: 12,
              width: 350,
              height: 55,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={{ color: '#585858', fontSize: 16 }}>تخطي</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7fa'
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 125,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 10,
    elevation: 5
  }
})
