import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PersonDetails.scss'

class PersonDetails extends Component {
  render() {
    const { person } = this.props
    return (
      <div>
        {<img src={person.image} alt={person.first_name} />}
        {<p className="primary">{person.first_name}</p>}
      </div>
    );
  }
}
PersonDetails.propTypes = {
  person: PropTypes.object
};
export default PersonDetails

