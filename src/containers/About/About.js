import React, { Component } from 'react'
import Button from '../../components/Button/Button'

import './About.scss'

class About extends Component {
  render() {
  	const {updateTime} = this.props
    return (
      <section className="about-container">
      	<h1>About content!</h1>
        <p>Current time: {this.props.currentTime}</p>
        <Button 
          placeholder='update start time!'
          propAction={updateTime}
        ></Button>
      </section>
    )
  }
}

export default About;
