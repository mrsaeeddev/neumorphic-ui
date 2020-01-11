import React, { Component } from 'react'
import PropTypes from 'prop-types'

var neuInputStyles = {
    borderRadius: '10px',
    outline:'0',
    width: '100%',
    height: '20px',
    padding: '5px',
    border: '5px solid #e8eef7',
    backgroundColor: 'rgb(224, 229, 236,0.6)',
    boxShadow: 'inset 3px 3px 3px rgba(163,177,198, 0.7),inset -3px -3px 4px rgba(255, 255, 255, 0.5), 9px 9px 16px rgb(163,177,198,0.6)'
}

export class NeuInput extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      placeholder, value, defaultValue, onChange
    } = this.props

    return (
        <div >
        <input style={neuInputStyles} placeholder={placeholder||""} value={value} onChange={onChange} defaultValue={defaultValue}/>
      </div>
    )
  }
}
