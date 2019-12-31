import React, { Component } from 'react'
import PropTypes from 'prop-types'

var neuReactionStyles = {
    borderRadius: '100px',
    textAlign: 'center',
    width: '150px',
    height: '150px',
    backgroundColor: '#E0E5EC',
    boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)'
}

export class NeuReaction extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div style={neuReactionStyles}>
        {/* Neomorhpic Card Component: {text} */}
      </div>
    )
  }
}