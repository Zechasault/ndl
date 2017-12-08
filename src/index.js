import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from 'scenes'
import configureStore from 'configureStore'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <App/>
    </Provider>,
    document.getElementById('root')
  )
})
