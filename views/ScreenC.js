import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Button,
  TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'

export default class ScreenC extends Component {
  state = {
    name: '',
    date: '',
    male: false,
    female: false,
    isValidName: false,
    isDateTimePickerVisible: false
  }

  _showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true, date: '' })
    this.refs.inputName.blur()
  }

  _hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false })
    this.refs.inputName.blur()
  }

  _handleDatePicked = date => {
    this.setState({ date: moment(date).format('YYYY/MM/DD') })
    this._hideDateTimePicker()
  }

  _handleButtonClick = obj => {
    this.setState(obj)
    this.refs.inputName.blur()
  }

  render() {
    return (
      <View style={styles.contianer}>
        <View
          style={{
            alignItems: 'flex-end',
            width: 350,
            marginTop: 50
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
              marginTop: 10,
              color: '#646464',
              fontFamily: 'NotoKufiArabic_Bold',
              fontSize: 14
            }}>
            عرفنا عن نفسك ؟
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center'
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 350,
              height: 63,
              elevation: 9,
              borderRadius: 2,
              marginTop: 20,
              flexDirection: 'row-reverse'
            }}>
            <View style={{ width: 275, marginTop: 5, marginRight: 10 }}>
              <Text
                style={{
                  fontSize: 10,
                  color: '#9B9B9B',
                  fontFamily: 'NotoKufiArabic_Regular'
                }}>
                الاسم
              </Text>
              <TextInput
                ref="inputName"
                style={{
                  fontFamily: 'NotoKufiArabic_Regular',
                  color: '#585858',
                  height: 38
                }}
              />
            </View>
          </View>
          <TouchableWithoutFeedback onPress={this._showDateTimePicker}>
            <View
              style={{
                backgroundColor: 'white',
                width: 350,
                height: 63,
                elevation: 9,
                borderRadius: 2,
                marginTop: 12,
                flexDirection: 'row-reverse'
              }}>
              <View style={{ width: 275, marginTop: 5, marginRight: 10 }}>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#9B9B9B',
                    fontFamily: 'NotoKufiArabic_Regular'
                  }}>
                  تاريخ الميلاد
                </Text>
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={date => this._handleDatePicked(date)}
                  onCancel={this._hideDateTimePicker}
                />
                <Text
                  style={{
                    fontFamily: 'NotoKufiArabic_Regular',
                    color: '#585858'
                  }}
                  children={this.state.date}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ flexDirection: 'row-reverse' }}>
          <TouchableNativeFeedback
            onPress={() =>
              this._handleButtonClick({ female: false, male: true })
            }>
            <View
              style={
                this.state.male ? styles.selectedButton : styles.defaultButton
              }>
              <Text
                style={
                  this.state.male ? styles.selectedText : styles.defaultText
                }>
                ذكر
              </Text>
              <Icon
                name="male"
                style={[
                  this.state.male ? styles.selectedText : styles.defaultText,
                  { marginRight: 20, marginLeft: 20, fontSize: 28 }
                ]}
              />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() =>
              this._handleButtonClick({ female: true, male: false })
            }>
            <View
              style={
                this.state.female ? styles.selectedButton : styles.defaultButton
              }>
              <Text
                style={
                  this.state.female ? styles.selectedText : styles.defaultText
                }>
                انثى
              </Text>
              <Icon
                name="female"
                style={[
                  this.state.female ? styles.selectedText : styles.defaultText,
                  { marginRight: 20, marginLeft: 20, fontSize: 28 }
                ]}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View
            style={{
              width: 350,
              height: 55,
              marginTop: 15,
              backgroundColor: '#146AFF',
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#f7f7fa',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap'
  },
  selectedButton: {
    backgroundColor: 'white',
    width: 165,
    height: 65,
    margin: 10,
    marginTop: 12,
    elevation: 9,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#146AFF',
    borderWidth: 2,
    borderRadius: 5
  },
  defaultButton: {
    backgroundColor: 'white',
    width: 165,
    height: 65,
    margin: 10,
    marginTop: 12,
    elevation: 9,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5
  },
  defaultText: {
    fontSize: 16,
    fontFamily: 'NotoKufiArabic_Regular',
    color: '#A2A2A2'
  },
  selectedText: {
    fontSize: 16,
    fontFamily: 'NotoKufiArabic_Regular',
    color: '#146AFF'
  }
})
