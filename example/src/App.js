import React, { Component } from 'react'

import { NeuHeading, NeuText, NeuCard, NeuInput, NeuButton, NeuLoader, NeuReaction, NeuProgressBar } from 'neumorphic-ui'

export default class App extends Component {
  render () {
    return (
      <div style={{width:'60%', textAlign:'center', margin: '0px auto'}}>
        <br />
        <br />
        <div style={{ textAlign:'center'}}><NeuHeading fontSize="46px" fontWeight="200"/></div>
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
        <NeuLoader />
        <br />
        <NeuProgressBar progress="80%" />
        <br />
        <NeuInput />
        <br />
        <NeuCard width="100%" />
      </div>
    )
  }
}
