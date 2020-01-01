import React, { Component } from 'react'

import { NeuH1, NeuText, NeuCard, NeuInput, NeuButton, NeuReaction } from 'neumorphic-ui'

export default class App extends Component {
  render () {
    return (
      <div style={{width:'60%', textAlign:'center', margin: '0px auto'}}>
        <br />
        <br />
        <div style={{ textAlign:'center'}}><NeuH1 /></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <NeuReaction />
        <br />
        <NeuText />
        <br />
        <NeuButton />
        <br />
        <br />
        <br />
        <NeuInput />
        <br />
        <NeuCard text='Modern React component module' />
      </div>
    )
  }
}
