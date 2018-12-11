import React, { Component } from 'react'

import AppContainer from './views/AppContainer'
import SplashScreen from './views/SplashScreen'
export default class App extends Component {
  state = {
    splashScreen: true
  }

  componentDidMount() {
    setTimeout(() => this.setState({ splashScreen: false }), 2000)
  }

  render() {
    return this.state.splashScreen ? (
      <SplashScreen
        handleScreenClick={() => this.setState({ splashScreen: false })}
      />
    ) : (
      <AppContainer
        handleSkipClick={() => this.setState({ splashScreen: true })}
      />
    )
  }
}
