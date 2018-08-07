import React, { Component } from 'react'
import Button from '../../components/Button/Button'

import './GHStatistics.scss'

class GHStatistics extends Component {
  constructor() {
    super()
    this.state= {
      publicData: [],
      explanation: {}
    }
  }
  getData() {
    // fetch('https://api.github.com/repos/octocat/Hello-World')

    return () => {
      fetch('https://api.github.com/repos/octocat/Hello-World/contributors')
        .then(res => res.json())
        .then(response => {
          if ('message' in response) {
            this.setState({
              message: response
            })
          } else {
            this.setState({
              publicData: response
            })
          }
        })
        .catch(err => console.error(err))
    }
  }
  render() {
    return (
      <section className="about-container">
      	<h1>GHStatistics content!</h1>
        <p>Current time: {this.props.currentTime}</p>
        <Button
          propAction= {this.getData()}
          placeholder='Fetch data'
        ></Button>
        <div
          className='contributors'
        >

          {
            this.state.publicData.length && this.state.publicData.map( contributor => <div 
            className='contributor'
            key={ contributor.id }
            >
            <ul>
              <li>
                <img src={ contributor.avatar_url } alt={contributor.login} />
              </li>
              <li>
                <p>login: { contributor.login }</p>
              </li>
              <li>
                <p>node_id: { contributor.node_id }</p>
              </li>
              <li>
                <small>type: { contributor.type }</small>
              </li>
            </ul>
          </div>) || (this.state.explanation && (
            <p>{ this.state.explanation.message }</p>
          ))
          }

        </div>
      </section>
    )
  }
}

export default GHStatistics;
