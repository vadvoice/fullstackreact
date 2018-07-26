import React, { Component } from 'react'
import Panel from '../../components/Panel/Panel';

import './Employees.scss'

class Employees extends Component {
  render() {
  	const { currentTime } = this.props
    return (
    	<div>
      		<Panel currentTime={currentTime} />
    	</div>
    )
  }
}

export default Employees