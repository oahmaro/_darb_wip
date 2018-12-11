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
import phoneNumber from 'react-native-phone-input/lib/phoneNumber'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ScreenA extends Component {
  state = {
    value: '+962 ',
    validInput: false
  }

  _handleInputChange = number => {
    this.setState({ value: number })
    this.phone.isValidNumber()
      ? this.setState({ validInput: true })
      : this.setState({ validInput: false })
  }

  _handlePhoneSubmit = () => {
    // Generate A code
    const genCode = parseInt(
      Math.random()
        .toString(10)
        .substring(7)
    )
      .toString()
      .slice(0, 5)

    // Send Code as sms message
    // Route to Phone Validiation Form View
    const formattedPhoneNumber =
      '(' + this.state.value.slice(0, 4) + ')' + this.state.value.slice(4)
    this.props.navigation.navigate('PhoneValidationCode', {
      validationCode: genCode,
      phoneNumber: formattedPhoneNumber
    })
  }

  render() {
    return (
      <View style={styles.contianer}>
        <Text
          style={{
            color: '#585858',
            marginLeft: 275,
            marginBottom: 15,
            fontSize: 14,
            fontFamily: 'NotoKufiArabic_Regular'
          }}>
          رقم الهاتف
        </Text>
        <View style={styles.formContainer}>
          <View
            style={{
              flexDirection: 'row-reverse',
              width: 300,
              alignItems: 'center'
            }}>
            <PhoneInput
              onChangePhoneNumber={number => this._handleInputChange(number)}
              style={{
                flex: 8,
                marginTop: 20,
                marginBottom: 15,
                marginRight: 50,
                flexDirection: 'row-reverse'
              }}
              textStyle={{ color: '#585858', marginLeft: -10 }}
              flagStyle={{ width: 38, height: 20 }}
              initialCountry=""
              ref={ref => {
                this.phone = ref
              }}
              value={this.state.value}
            />
            {this.state.validInput && (
              <MaterialCommunityIcon
                style={{ flex: 1 }}
                name="check-circle"
                size={30}
                color="#0054E8"
              />
            )}
          </View>
          <View
            style={{ backgroundColor: '#585858', height: 0.5, width: 300 }}
          />
          <Text
            style={{
              marginTop: 10,
              color: '#585858',
              fontSize: 10,
              fontFamily: 'NotoKufiArabic_Regular'
            }}>
            سنقوم بإرسال رسالة نصية للتحقق من الرقم
          </Text>
        </View>
        <TouchableNativeFeedback
          disabled={this.state.validInput ? false : true}
          onPress={this._handlePhoneSubmit}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View
            style={{
              marginTop: 15,
              width: 350,
              height: 55,
              backgroundColor: `${
                this.state.validInput ? '#146AFF' : '#AEAEAE'
              }`,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontFamily: 'NotoKufiArabic_Regular'
              }}>
              ارسل
            </Text>
          </View>
        </TouchableNativeFeedback>
        {/* <TouchableWithoutFeedback
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
            <Text style={{ color: '#585858', fontSize: 16, fontFamily: 'NotoKufiArabic_Regular' }}>تخطي</Text>
          </View>
        </TouchableWithoutFeedback> */}
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
