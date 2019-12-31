import React, { Component } from 'react'
import PropTypes from 'prop-types'

var neuCardStyles = {
    borderRadius: '15px',
    outline:'0',
    width: '100%',
    height: '20px',
    padding: '5px',
    border: '5px solid #e2edf7',
    backgroundColor: 'rgb(224, 229, 236,0.6)',
    boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
    boxShadow: 'inset  -9px -9px 16px rgb(163,177,198, 0.2), 9px 9px 16px rgb(163,177,198,0.6)'
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
