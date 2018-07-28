import React, { Component } from 'react'
import Button from '../../components/Button/Button'

class About extends Component {
  render() {
  	const {updateTime} = this.props
    return (
      <section>
      	<h1>About content!</h1>
        <p>Current time: {this.props.currentTime}</p>
        {/*<button onClick={e => updateTime(e)}>update time</button>*/}
        <Button 
              placeholder='some btn'
              propAction={updateTime}
            ></Button>
      </section>
    )
  }
}

export default About;
