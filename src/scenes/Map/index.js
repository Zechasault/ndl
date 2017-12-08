import React, { Component } from 'react'
import Loader from 'components/Loader'
import Form from './components/Form'
import container from './container'

class ActivityTracker extends Component {
  state = {}

  render() {
    const { loading } = this.props

    return (
      <Loader isLoading={false}>
        <div>
          <Form/>
        </div>
      </Loader>
    )
  }
}

export default container(ActivityTracker)
