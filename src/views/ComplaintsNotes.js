import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TextInput,
  ScrollView
} from 'react-native'

export default class ComplaintsNotes extends Component {
  state = {
    option1: false,
    option2: false,
    option3: false
  }

  _onOption1Click = () => {
    this.setState({ option1: true, option2: false, option3: false })
  }
  _onOption2Click = () => {
    this.setState({ option1: false, option2: true, option3: false })
  }
  _onOption3Click = () => {
    this.setState({ option1: false, option2: false, option3: true })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.view}>
        <View style={styles.container}>
          <View
            style={{
              width: '85%',
              alignItems: 'center'
            }}>
            <Text
              style={[
                styles.text,
                { width: '100%', fontSize: 16, marginTop: 50 }
              ]}>
              هل واجهتك مشكلة ؟
            </Text>
            <TouchableNativeFeedback onPress={this._onOption1Click}>
              <View
                style={[
                  this.state.option1
                    ? styles.selectedButton
                    : styles.defaultButton,
                  { marginTop: 10 }
                ]}>
                <Text
                  style={
                    this.state.option1 ? styles.selectedText : styles.text
                  }>
                  لم يأتي الباص
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={this._onOption2Click}>
              <View
                style={[
                  this.state.option2
                    ? styles.selectedButton
                    : styles.defaultButton,
                  { marginTop: 10 }
                ]}>
                <Text
                  style={
                    this.state.option2 ? styles.selectedText : styles.text
                  }>
                  مشكلة في التطبيق
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={this._onOption3Click}>
              <View
                style={[
                  this.state.option3
                    ? styles.selectedButton
                    : styles.defaultButton,
                  { marginTop: 10 }
                ]}>
                <Text
                  style={
                    this.state.option3 ? styles.selectedText : styles.text
                  }>
                  أخرى
                </Text>
              </View>
            </TouchableNativeFeedback>
            <Text
              style={[
                styles.text,
                { width: '100%', fontSize: 16, marginTop: 30 }
              ]}>
              اشرح لنا ما هي المشكلة ؟
            </Text>
            <TextInput
              multiline={true}
              numberOfLines={8}
              style={styles.textInput}
            />
            <TouchableNativeFeedback>
              <View
                style={[
                  styles.selectedButton,
                  { marginTop: 30, elevation: 5 }
                ]}>
                <Text style={styles.selectedText}>ارسل</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20
  },
  text: {
    fontFamily: 'NotoKufiArabic_Regular',
    color: '#1E1E1E',
    fontSize: 12
  },
  defaultButton: {
    backgroundColor: '#F7F7FA',
    width: '100%',
    height: 50,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedButton: {
    backgroundColor: '#146AFF',
    width: '100%',
    height: 50,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedText: {
    fontFamily: 'NotoKufiArabic_Regular',
    color: '#FFFFFF',
    fontSize: 12
  },
  textInput: {
    width: '100%',
    backgroundColor: '#E8E8E8',
    borderRadius: 3,
    marginTop: 10
  }
})
