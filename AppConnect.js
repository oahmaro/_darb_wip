import React, { Component } from 'react'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import middleware from './src/middleware'

const store = createStore(reducer, middleware)

export default class AppConnect extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
