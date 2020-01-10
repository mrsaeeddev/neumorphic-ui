import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NeuProgressBar extends Component {
  static propTypes = {
    width: PropTypes.string
  }

  render() {
    const {
      progress
    } = this.props

    return (
    <div style={{    
      position: 'relative',
      width: '100%',
      height: '16px',
      borderRadius: '8px',
      boxShadow: 'rgba(0, 0, 0, 0.05) 9px 9px 9px, rgba(255, 255, 255, 0.5) -9px -9px 9px, rgba(0, 0, 0, 0.05) 4px 4px 4px inset, rgba(255, 255, 255, 0.5) -4px -4px 4px inset',
      marginBottom: '56px'}} >
    <div style={{
      width: progress||'50%',
      height: '16px',
      left: '2px',
      top: '2px',
      borderRadius: '6px',
      backgroundColor: 'rgb(185, 194, 206)',
      boxShadow: 'rgba(0, 0, 0, 0.05) 2px 2px 2px, rgba(255, 255, 255, 0.5) -2px -2px 2px, rgba(255, 255, 255, 0.5) 3px 3px 3px inset, rgba(0, 0, 0, 0.05) -3px -3px 3px inset'
  }}></div>
  </div>
    )
  }
}
