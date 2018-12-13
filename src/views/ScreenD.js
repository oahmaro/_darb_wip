import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FeatherIcon from 'react-native-vector-icons/Feather'
import Map from '../components/Map'
import { DrawerActions } from 'react-navigation-drawer'

export default class ScreenD extends Component {
  state = {
    weather: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row-reverse',
              justifyContent: 'center',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
              height: 175
            }}>
            <View style={{ flex: 8 }}>
              <Text style={styles.text}>صباح الخير</Text>
              <Text
                style={[
                  styles.text,
                  { fontFamily: 'NotoKufiArabic_Bold', fontSize: 18 }
                ]}>
                {this.props.navigation.getParam('user').name}
              </Text>
              <View style={{ flexDirection: 'row-reverse', marginTop: 10 }}>
                <FeatherIcon name="sun" size={50} color="white" />
                <View style={{ marginRight: 12 }}>
                  <Text style={styles.text}>حالة الطقس</Text>
                  <Text style={styles.text}>مشمس 24 درجه مئوية</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                width: 45,
                height: 45,
                borderRadius: 30,
                elevation: 12
              }}>
              <TouchableNativeFeedback
                onPress={() =>
                  this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                }
                background={TouchableNativeFeedback.Ripple('#AAF', true)}>
                <View
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 45,
                    height: 45,
                    borderRadius: 30
                  }}>
                  <FeatherIcon name="menu" size={20} color="#43496A" />
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View>
            <TouchableNativeFeedback>
              <View style={styles.button}>
                <FontAwesomeIcon
                  color="#146AFF"
                  name="circle"
                  size={10}
                  style={{ marginRight: 15 }}
                />
                <Text
                  style={{
                    fontFamily: 'NotoKufiArabic_Regular',
                    color: '#585858',
                    marginRight: 15,
                    fontSize: 16
                  }}>
                  اين تريد الذهاب ؟
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <Map />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  header: {
    width: '100%',
    backgroundColor: '#146AFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 270,
    elevation: 9
  },
  text: {
    fontSize: 16,
    fontFamily: 'NotoKufiArabic_Regular',
    color: 'white'
  },
  button: {
    width: 375,
    height: 60,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    elevation: 9
  }
})
