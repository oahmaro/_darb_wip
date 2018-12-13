import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback
} from 'react-native'
import Modal from 'react-native-modal'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

const days = ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'السبت']

export default class RepeatTrip extends Component {
  state = {
    isVisible: true,
    like: false,
    dislike: false,
    days: []
  }

  _handleButtonClick = day => {
    if (this.state.days.includes(day)) {
      const newArray = this.state.days.filter(i => i === day)
      this.setState({ days: newArray })
    } else this.setState({ days: [...this.state.days, day] })
  }

  render() {
    return (
      <Modal
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
        isVisible={this.state.isVisible}
        onBackdropPress={() => this.setState({ isVisible: false })}>
        <View style={styles.modal}>
          <View
            style={[
              {
                flex: 1,
                flexDirection: 'column'
              }
            ]}>
            <View>
              <Text style={styles.text}>كرر هذه الرحلة ؟</Text>
              <Text style={[styles.text, { fontSize: 9 }]}>
                سوف نرسل لك تنبيه يوميا
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row-reverse',
                flexWrap: 'wrap'
              }}>
              {days.map(day => (
                <TouchableNativeFeedback
                  key={day}
                  onPress={day => this._handleButtonClick(day)}>
                  <View
                    style={[
                      this.state.day === day
                        ? styles.selectedButton
                        : styles.defaultButton
                    ]}>
                    <Text
                      style={[
                        this.state.day === day
                          ? styles.selectedText
                          : styles.defaultText
                      ]}>
                      {day}
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              ))}
            </View>
            <View>
              <Text style={[styles.text, { marginTop: 75, fontSize: 10 }]}>
                اختر موعد الوصول
              </Text>
              <TouchableNativeFeedback>
                <Text style={(styles.text, { marginTop: 5, fontSize: 10 })}>
                  8:30 ص
                </Text>
              </TouchableNativeFeedback>
            </View>
            <TouchableNativeFeedback>
              <View
                style={[
                  styles.selectedButton,
                  { marginTop: 10, elevation: 5 }
                ]}>
                <Text style={styles.selectedText}>ارسل</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    marginTop: 100,
    padding: 20,
    width: 365,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 12
  },
  text: {
    fontFamily: 'NotoKufiArabic_Regular',
    color: '#545454',
    fontSize: 14
  },
  selectedButton: {
    backgroundColor: '#146AFF',
    width: '100%',
    height: 50,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  defaultButton: {
    backgroundColor: '#E9E9E9',
    height: 30,
    width: 60,
    borderRadius: 3,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedText: {
    color: 'white',
    fontFamily: 'NotoKufiArabic_Regular'
  },
  defaultText: {
    fontFamily: 'NotoKufiArabic_Regular',
    color: '#545454',
    fontSize: 10
  }
})
