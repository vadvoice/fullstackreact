import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PersonDetails.scss'

class PersonDetails extends Component {
  render() {
    const { person } = this.props
    return (
      <div className="person-details-wrapper">
        {<img src={person.image} alt={person.first_name} />}
        {<p>{person.first_name}</p>}
      </div>
    );
  }
}
PersonDetails.propTypes = {
  person: PropTypes.object
};
export default PersonDetails

