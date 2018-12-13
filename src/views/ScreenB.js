import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native'
import CodeInput from 'react-native-confirmation-code-input'

export default class ScreenB extends Component {
  state = {
    phoneNumber: this.props.navigation.getParam('phoneNumber'),
    isValid: false,
    code: this.props.navigation.getParam('validationCode'),
    resubmit: false,
    seconds: 30
  }

  _tick = () => {
    if (this.state.seconds !== 0) {
      this.setState(prevState => ({ seconds: prevState.seconds - 1 }))
    } else this.setState({ resubmit: true })
  }

  componentDidMount() {
    this.interval = setInterval(() => this._tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  _onFullFill = isValid => {
    isValid ? this.setState({ isValid }) : alert('Invalid Code')
  }

  _handleCodeSubmit = () =>
    this.props.navigation.navigate('RegistrationForm', {
      phoneNumber: this.state.phoneNumber
    })

  _handleCodeResubmit = () => {
    if (this.state.resubmit) {
      // Generate A code
      let genCode = parseInt(
        Math.random()
          .toString(10)
          .substring(7)
      )
        .toString()
        .slice(0, 5)
      // Set code state to the new generated code
      this.setState({
        code: genCode,
        seconds: 30,
        resubmit: false,
        isValid: false
      })
      // send sms message
      // Code goes here
    }
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
              fontFamily: 'NotoKufiArabic_Bold',
              fontSize: 22,
              color: '#585858'
            }}>
            تسجيل الدخول
          </Text>
          <Text
            style={{
              marginTop: 35,
              fontFamily: 'NotoKufiArabic_Regular',
              fontSize: 16,
              color: '#585858'
            }}>
            أدخل رقم التحقق المرسل الى الرقم
          </Text>
          <Text
            style={{
              fontFamily: 'NotoKufiArabic_Bold',
              fontSize: 22,
              color: '#585858'
            }}>
            {this.state.phoneNumber}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            height: 300,
            width: '100%',
            marginTop: 10
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
            onFulfill={(isValid, code) => this._onFullFill(isValid)}
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
          <View
            style={{
              flexDirection: 'row-reverse',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20
            }}>
            <TouchableWithoutFeedback
              disabled={this.state.resubmit ? true : false}
              onPress={this._handleCodeResubmit}>
              <Text
                style={{
                  color: `${this.state.resubmit ? '#0054E8' : '#585858'}`,
                  fontFamily: 'NotoKufiArabic_Regular'
                }}>
                إعادة ارسال رمز التحقق خلال
              </Text>
            </TouchableWithoutFeedback>
            <Text style={{ fontWeight: '800', marginRight: 10 }}>
              {this.state.seconds < 10
                ? '0:0' + this.state.seconds
                : '0:' + this.state.seconds}
            </Text>
          </View>

          <TouchableNativeFeedback
            disabled={this.state.isValid ? false : true}
            onPress={this._handleCodeSubmit}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View
              style={{
                width: 350,
                height: 55,
                marginTop: 35,
                backgroundColor: `${
                  this.state.isValid ? '#146AFF' : '#AEAEAE'
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
                استمرار
              </Text>
            </View>
          </TouchableNativeFeedback>
          <Text style={{ marginTop: 20 }}>{this.state.code}</Text>
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
