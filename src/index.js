import React, { Component } from 'react'
import PropTypes from 'prop-types'

var neoCardStyles = {
  color: 'red',
  border: '0',
  paddingTop: '20px',
  paddingBottom: '20px',
  textAlign: 'center',
  width: '100%',
  borderRadius: '1.25rem',
  background: '#f7f7f7',
  boxShadow: '10px 19px 25px rgba(0,0,0,0.30), 10px 15px 12px rgba(0,0,0,0.22)'
};

export default class NeoCard extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div style={neoCardStyles}>
        Neomorhpic Card Component: {text}
      </div>
    )
  }
}
