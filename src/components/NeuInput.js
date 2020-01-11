import React, { Component } from 'react'
import PropTypes from 'prop-types'


   


export class NeuInput extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      width, placeholder, value, onChange
    } = this.props

    return (
        <div >
        <input style={{ borderRadius: '10px',
    outline:'0',
    width: width||'auto',
    height: '20px',
    padding: '5px',
    fontWeight:'600',
    color: '#a1a9b5',
    paddingLeft: '8px',
    border: '5px solid #e8eef7',
    backgroundColor: 'rgb(224, 229, 236,0.6)',
    boxShadow: 'inset 3px 3px 3px rgba(163,177,198, 0.7),inset -3px -3px 4px rgba(255, 255, 255, 0.5), 9px 9px 16px rgb(163,177,198,0.6)'}} placeholder={placeholder||""} value={value} onChange={onChange} />
      </div>
    )
  }
}
