import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NeuButton extends Component {
  static propTypes = {
    text: PropTypes.string
  }
  constructor(props){
    super(props);
    this.state = {
      hovered: false,
      clicked: false
    }
  }

  onClick = () => {
  this.setState({ hovered:false, clicked: !this.state.clicked });  }

  mouseOver = () => {
    !this.state.clicked && this.setState({hovered:true})
  }

  mouseOut = () => {
    this.setState({hovered: false})
  }
  render() {
    const {
      text
    } = this.props

    return (
    <div style={{
      display:'block',
      borderRadius: '4px',
      paddingTop: '20px',
      outline: '0',
      fontWeight: '600',
      color: this.state.hovered ? '#e0e5ec' : '#b9c2ce',
      paddingBottom: '20px',
      textAlign: 'center',
      border: '0',
      cursor: 'pointer',
      width: '100%',
      backgroundColor: this.state.hovered ? '#b9c2ce' : '#E0E5EC',
      boxShadow: this.state.clicked ? '9px 9px 16px rgba(0, 0, 0, 0), -9px -9px 16px rgba(247, 251, 255, 0), 9px 9px 16px rgba(0, 0, 0, 0.1) inset, -9px -9px 16px rgba(247, 251, 255, 0.7) inset' : '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
    }} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick}>{text}</div>
    )
  }
}
