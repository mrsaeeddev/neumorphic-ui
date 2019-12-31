import React, { Component } from 'react'
import PropTypes from 'prop-types'

var neuCardStyles = {
    borderRadius: '7px solid white',
    width: '100%',
    height: '20px',
    padding: '5px',
    backgroundColor: '#E0E5EC',
    boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)'
}

export class NeuInput extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
        <div >
        <input style={neuCardStyles} />
      </div>
    )
  }
}
