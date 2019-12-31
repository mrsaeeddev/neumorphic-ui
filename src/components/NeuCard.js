import React, { Component } from 'react'
import PropTypes from 'prop-types'

var neuCardStyles = {
    borderRadius: '4px',
    paddingTop: '20px',
    paddingBottom: '20px',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#E0E5EC',
    boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)'
}

export class NeuCard extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div style={neuCardStyles}>
        Neomorhpic Card Component: {text}
      </div>
    )
  }
}
