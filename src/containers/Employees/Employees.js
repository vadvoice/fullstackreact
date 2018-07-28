import React, { Component } from 'react'
import Panel from '../../components/Panel/Panel';

import './Employees.scss'

class Employees extends Component {
  render() {
    return (
    	<div>
      		<Panel {...this.props} />
    	</div>
    )
  }
}

export default Employees