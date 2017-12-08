import React, { Component } from 'react'
import Agglomeration from './components/Agglomeration'
import Collision from './components/Collision'
import Intersection from './components/Intersection'
import Luminosity from './components/Luminosity'
import Meteo from './components/Meteo'

class Form extends Component {
  state = {
    luminosity: '',
    collision: '',
    intersection: '',
    agglomeration: '',
    meteo: '',
  }

  handleChange = (property) => (event) => {
    this.setState({ [property]: event.target.value })
  }

  render() {
    const { luminosity, collision, intersection, agglomeration, meteo } = this.state

    return (
      <div>
        <Agglomeration onChange={this.handleChange('agglomeration')} value={agglomeration}/>
        <Collision onChange={this.handleChange('collision')} value={collision}/>
        <Intersection onChange={this.handleChange('intersection')} value={intersection}/>
        <Luminosity onChange={this.handleChange('luminosity')} value={luminosity}/>
        <Meteo onChange={this.handleChange('meteo')} value={meteo}/>
      </div>
    )
  }
}

export default Form
