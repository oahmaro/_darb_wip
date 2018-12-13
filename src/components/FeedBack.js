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

export default class FeedBack extends Component {
  state = {
    isVisible: true,
    like: false,
    dislike: false
  }

  _onLikeClick = () => this.setState({ like: true, dislike: false })
  _onDislikeClick = () => this.setState({ like: false, dislike: true })

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
                flexDirection: 'row-reverse',
                justifyContent: 'space-between'
              }
            ]}>
            <View>
              <Text style={styles.text}>الحمد لله على السلامة</Text>
              <Text
                style={[
                  styles.text,
                  { fontSize: 14, fontFamily: 'NotoKufiArabic_Regular' }
                ]}>
                كيف كانت رحلتك ؟
              </Text>
            </View>

            <View style={{ flexDirection: 'row-reverse' }}>
              <TouchableNativeFeedback onPress={this._onLikeClick}>
                <View
                  style={[
                    this.state.like
                      ? styles.selectedLikeButton
                      : styles.defaultLikeButton,
                    { marginLeft: 5 }
                  ]}>
                  <AntDesignIcon size={20} name="like1" color="white" />
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={this._onDislikeClick}>
                <View
                  style={[
                    this.state.dislike
                      ? styles.selectedLikeButton
                      : styles.defaultLikeButton,
                    { marginLeft: 5 }
                  ]}>
                  <AntDesignIcon size={20} name="dislike1" color="white" />
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={5}
          />
          <TouchableNativeFeedback>
            <View
              style={[styles.selectedButton, { marginTop: 10, elevation: 5 }]}>
              <Text style={styles.selectedText}>ارسل</Text>
            </View>
          </TouchableNativeFeedback>
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
    height: 250,
    backgroundColor: 'white',
    borderRadius: 12
  },
  text: {
    fontFamily: 'NotoKufiArabic_Regular',
    color: '#545454',
    fontSize: 10
  },
  textInput: {
    backgroundColor: '#F5F5F5'
  },
  selectedButton: {
    backgroundColor: '#146AFF',
    width: '100%',
    height: 50,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedLikeButton: {
    backgroundColor: '#4788FC',
    width: 35,
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  defaultLikeButton: {
    backgroundColor: '#B4C1D2',
    width: 35,
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedText: {
    color: 'white',
    fontFamily: 'NotoKufiArabic_Regular'
  }
})
