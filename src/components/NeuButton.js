import React, { Component } from 'react'
import PropTypes from 'prop-types'

var neuButtonStyles = {
    'neo-button': {
    borderRadius: '4px',
    paddingTop: '20px',
    outline: '0',
    paddingBottom: '20px',
    textAlign: 'center',
    border: '0',
    cursor: 'pointer',
    width: '100%',
    backgroundColor: '#E0E5EC',
    boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
},
"&:hover": {
        backgroundColor: "black"
      }
}

export class NeuButton extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
     
    const {
      text
    } = this.props

    return (
    <div style={neuButtonStyles["neo-button"]} >Neumorphic UI</div>
    )
  }
}
