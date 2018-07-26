import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <section>
      	<h1>About content!</h1>
        <p>Current time: {this.props.currentTime}</p>
        <button onClick={e => this.props.updateTime()}>UpdateTime</button>
      </section>
    )
  }
}

export default About;
