import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    currentTime: state.currentTime
  }
}

// class About extends Component {
//   render() {
//     return (
//       <p>
//       	About content!
//       </p>
//     )
//   }
// }

const About = (props) => {
  return (
    <div className="home">
      <h1>Welcome home!</h1>
      <p>Current time: {props.currentTime}</p>
    </div>
  );
}

export default connect(
  mapStateToProps
)(About);
