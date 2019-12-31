import React, { Component } from 'react'

import { NeuCard, NeuReaction, NeuInput } from 'neumorphic-ui'

export default class App extends Component {
  render () {
    return (
      <div>
        <br />
        <br />
        <NeuReaction />
        <br />
        <NeuInput />
        <br />
        <NeuCard text='Modern React component module' />
      </div>
    )
  }
}
