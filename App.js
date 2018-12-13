import React, { Component } from 'react'
import { View } from 'react-native'
import AppContainer from './src/components/AppContainer'
import SplashScreen from './src/views/SplashScreen'

import { connect } from 'react-redux'
import { handleInitialData } from './src/actions/shared'

import ScreenE from './src/views/ScreenE'
import PrivacyPolicy from './src/views/PrivacyPolicy'
import AboutUs from './src/views/AboutUs'
import ComplaintsNotes from './src/views/ComplaintsNotes'
import FeedBack from './src/components/FeedBack'
import RepeatTrip from './src/components/RepeatTrip'
import Map from './src/components/Map'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData)
  }
  render() {
    return (
      <View style={{ flex: 1, width: '100%' }}>
        <Map />
        <FeedBack />
      </View>
    )
  }
}

function mapStateToProps({ user }) {
  return {}
}

export default connect()(App)
