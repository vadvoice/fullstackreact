import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PersonDetails.scss'

class PersonDetails extends Component {
  render() {
    const { person, full } = this.props
    var styles = {
      backgroundColor: `${person.color}`,
    };
    return (
      <div className="person-details-wrapper" style={styles}>
        {<img src={person.image} alt={person.first_name} />}
        {<p>{person.first_name}</p>}
        {full && (
          <div>
            <p>{person.gender}</p>
            <p>{person.ip_address}</p>
            <p>{person.short_info}</p>
          </div>
        )}
      </div>
    );
  }
}
PersonDetails.propTypes = {
  person: PropTypes.object
};
export default PersonDetails

