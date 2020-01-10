import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NeuHeading extends Component {
  static propTypes = {
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
  }

  render() {
    const {
      fontSize, fontWeight
    } = this.props

    return (
    <div style={{
      borderRadius: '7px solid white',
      width: '100%',
      height: '20px',
      padding: '5px',
      fontSize: fontSize||'100px',
      fontWeight: fontWeight||'900',
      color: '#E0E5EC',
      textShadow: '4px 4px 4px rgb(163,177,198,0.6)'
  }} >NeuHeading Component</div>
    )
  }
}
