import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css';
var neuLoaderStyles = {
    borderRadius: '7px solid white',
    width: '100%',
    height: '20px',
    padding: '5px',
    fontSize: '100px',
    fontWeight: '900',
    color: '#E0E5EC',
    textShadow: '4px 4px 4px rgb(163,177,198,0.6)'
}

export class NeuLoader extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className="loader-parent">
    <div className="loader"></div>
    </div>
    )
  }
}
