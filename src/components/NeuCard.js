import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NeuCard extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
  }

  render() {
    const {
      width,
      height
    } = this.props

    return (
      <div style={{
        borderRadius: '4px',
        paddingTop: '20px',
        paddingBottom: '20px',
        textAlign: 'center',
        height: height||'15px',
        width: width||'100%',
        backgroundColor: '#E0E5EC',
        boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)'
    }}>
      NeuCard Component
      </div>
    )
  }
}
