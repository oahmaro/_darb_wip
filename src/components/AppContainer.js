import React, { Component } from 'react'

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  withNavigation
} from 'react-navigation'
import SplashScreen from '../views/SplashScreen'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import AboutUs from '../views/AboutUs'
import ScreenC from '../views/ScreenC'
import ScreenD from '../views/ScreenD'

const DrawerNav = createDrawerNavigator(
  {
    Home: ScreenD
  },
  {}
)

const AuthStack = createSwitchNavigator({
  PhoneReg: ScreenA,
  PhoneValidationCode: ScreenB,
  RegistrationForm: ScreenC
})

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: SplashScreen,
      App: DrawerNav,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
)

export default AppContainer
