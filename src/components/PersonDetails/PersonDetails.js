import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PersonDetails.css'

class PersonDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { person } = this.props
    return (
      <div>
        <img src={person.image} alt={person.first_name} />
        <p>{person.first_name}</p>
      </div>
    );
  }
}
PersonDetails.propTypes = {
  person: PropTypes.object
};
export default PersonDetails

