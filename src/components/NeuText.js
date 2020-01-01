import React, { Component } from 'react'
import PropTypes from 'prop-types'

var neuTextStyles = {
    borderRadius: '7px solid white',
    width: '100%',
    height: '20px',
    padding: '5px',
    fontSize: '20px',
    color: '#a8b4b8',
}

export class NeuText extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
    <p style={neuTextStyles} >Neumorphic UI</p>
    )
  }
}
