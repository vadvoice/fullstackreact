import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import './Person.scss'

class Person extends Component {
  constructor(props) {
    super(props)
    this.state ={
      selected: false
    }
  }

  render() {
    const {person} = this.props
    let wrapperClasses= ['person-card']
    if(this.props.selected) {
      wrapperClasses.push('active')
    }
    return (
      <div 
        className={wrapperClasses.join(' ')}
        onClick={(e) => this.props.onShowPerson(e, person)}
      >
        Description:
        <p><i>{person.first_name}</i> <strong>{person.last_name}</strong></p>
        <p className="person-card-email">{person.email}</p>
      </div>
    );
  }
}

Person.propTypes = {
  person: PropTypes.object,
}

export default Person

