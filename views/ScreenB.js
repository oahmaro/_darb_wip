import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import PhoneInput from 'react-native-phone-input'
import CodeInput from 'react-native-confirmation-code-input'

export default class ScreenA extends Component {
  state = {
    isValid: false,
    code: '50018'
  }

  onFullFill = isValid => {
    isValid ? this.setState({ isValid }) : alert('Invalid Code')
  }

  render() {
    return (
      <View style={styles.contianer}>
        <View
          style={{
            alignItems: 'flex-end',
            padding: 45,
            height: 185,
            flexGrow: 1
          }}>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 22,
              color: '#585858'
            }}>
            تسجيل الدخول
          </Text>
          <Text
            style={{
              marginTop: 50,
              fontWeight: '100',
              fontSize: 16,
              color: '#585858'
            }}>
            أدخل رقم التحقق المرسل الى الرقم
          </Text>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 22,
              color: '#585858'
            }}>
            (+962) 796258965
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            height: 300,
            width: '100%'
          }}>
          <CodeInput
            space={12}
            returnKeyType={'done'}
            keyboardType="numeric"
            ref="codeInputRef2"
            compareWithCode={this.state.code}
            activeColor="#0E63F8"
            autoFocus={false}
            ignoreCase={true}
            inputPosition="center"
            onFulfill={(isValid, code) => this.onFullFill(isValid)}
            onChange={() => this.setState({ isValid: false })}
            containerStyle={{ maxHeight: 65 }}
            codeInputStyle={{ borderWidth: 1.5 }}
            codeInputStyle={{
              borderRadius: 10,
              width: 60,
              height: 75,
              backgroundColor: 'white',
              elevation: 6,
              color: '#585858',
              fontWeight: '800',
              fontSize: 22
            }}
          />
          <Text style={{ marginTop: 20 }}>
            إعادة ارسال رمز التحقق خلال 0:30
          </Text>
          <TouchableNativeFeedback
            disabled={this.state.isValid ? false : true}
            onPress={this._onPressButton}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View
              style={{
                width: 350,
                height: 55,
                marginTop: 45,
                backgroundColor: `${
                  this.state.isValid ? '#146AFF' : '#AEAEAE'
                }`,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5
              }}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '800' }}>
                استمرار
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f7f7fa',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
