import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NeuHeading extends Component {
  static propTypes = {
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
  }

  render() {
    const {
      text, fontSize, fontWeight
    } = this.props

    return (
    <div style={{
      display: 'block',
      borderRadius: '7px solid white',
      width: '100%',
      height: '20px',
      padding: '5px',
      fontSize: fontSize||'100px',
      fontWeight: fontWeight||'900',
      color: '#E0E5EC',
      textShadow: '3px 3px 9px rgb(163,177,198,0.6)'
    }} >{text}</div>
    )
  }
}
