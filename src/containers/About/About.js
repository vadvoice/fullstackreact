import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchNewTime } from '../../redux/actionCreators';

const mapStateToProps = state => {
  return {
    currentTime: state.currentTime
  }
}

const mapDispatchToProps = dispatch => ({
  updateTime: () => dispatch(fetchNewTime())
})

class About extends Component {
  constructor(props) {
    super(props)
  }
  pushNewDate() {
    this.props.dispatch({
      type: 'FETCH_NEW_TIME',
      payload: new Date()
    })
  }
  render() {
    console.log(this)
    return (
      <section>
      	<h1>About content!</h1>
        <p>Current time: {this.props.currentTime}</p>
        <button onClick={e => this.props.updateTime()}>set new time</button>
      </section>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
