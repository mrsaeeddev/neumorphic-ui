import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class NeoCard extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Neomorhpic Card Component: {text}
      </div>
    )
  }
}
