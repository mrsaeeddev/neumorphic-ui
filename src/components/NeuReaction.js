import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NeuReaction extends Component {
  static propTypes = {
    size: PropTypes.string
  }
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const {
      size
    } = this.props

    return (
      <button onClick={this.handleClick} style={ this.state.clicked ? {
      borderRadius: '50%',
      width: size||'70px',
      height: size||'70px',
      border: '0px',
      cursor: 'pointer',
      outline:'0px',
      backgroundColor: '#E0E5EC',
      boxShadow: '9px 9px 16px rgba(0, 0, 0, 0), -9px -9px 16px rgba(247, 251, 255, 0), 9px 9px 16px rgba(0, 0, 0, 0.1) inset, -9px -9px 16px rgba(247, 251, 255, 0.7) inset'
      } : {borderRadius: '100px',textAlign: 'center',
      width: size||'70px',
      height: size||'70px',
      border: '0px',
      cursor: 'pointer',
      outline:'0px',
      backgroundColor: '#E0E5EC',
      boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)'}}>
      </button>
    )
  }
}