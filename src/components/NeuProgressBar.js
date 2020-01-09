import React, { Component } from 'react'
import PropTypes from 'prop-types'

var neuProgressBarStyles = {
    outer : {
 width: '80%',
  height: '16px',
  left: '2px',
  top: '2px',
  borderRadius: '6px',
  backgroundColor: '#b9c2ce',
  boxShadow: '2px 2px 2px rgba(0,0,0,0.05), -2px -2px 2px rgba(255,255,255,0.5),inset 3px 3px 3px rgba(255,255,255,0.5),inset -3px -3px 3px rgba(0,0,0,0.05)',  
},
inner : {
    position: 'relative',
  width: '100%',
  height: '16px',
  borderRadius: '8px',
  boxShadow:'9px 9px 9px rgba(0,0,0,0.05),-9px -9px 9px rgba(255,255,255,0.5), inset 4px 4px 4px rgba(0,0,0,0.05),inset -4px -4px 4px rgba(255,255,255,0.5)',
  marginBottom: '56px'
}
}
export class NeuProgressBar extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
    <div style={neuProgressBarStyles.outer && neuProgressBarStyles.inner} >
    <div style={neuProgressBarStyles.outer}></div>
  </div>
    )
  }
}
