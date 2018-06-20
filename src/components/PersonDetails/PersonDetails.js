import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './PersonDetails.css'

class PersonDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { person } = this.props
    return (
      <div>
        <img src={person.image} />
        <p>{person.first_name}</p>
      </div>
    );
  }
}

export default PersonDetails

