import React, { Component } from 'react'

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import SplashScreen from './SplashScreen'
import ScreenA from './ScreenA'
import ScreenB from './ScreenB'
import AboutUs from './AboutUs'
import ScreenC from './ScreenC'
import ScreenD from './ScreenD'

const AppNavigator = createSwitchNavigator({
  PhoneReg: ScreenA,
  PhoneValidationCode: ScreenB,
  RegistrationForm: ScreenC,
  WelcomScreen: ScreenD
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
