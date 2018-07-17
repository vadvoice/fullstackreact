import React, { Component } from 'react'
import Header from '../Header/Header';
import Person from '../Person/Person';
import PersonDetails from '../PersonDetails/PersonDetails';

import './Panel.css'

class Panel extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      employees: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:1234/people')
      .then(res => res.json())
      .then(r => this.refreshData(r))
      .catch(err => console.error(err))

    // fetch('https://raw.githubusercontent.com/vadvoice/dbFiles/master/levi9.json')
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(r => this.setData(r))
    //   .catch(err => console.error(err))
  }
  refreshData(data) {
    this.setState({
      employees: data,
      filtered: data
    })
  }
  setData(data) {
    this.setState({
      articles: data
    })
  }
  handleSearch = txt => {
    if (txt === '') {
      this.setState({
        filtered: this.state.employees
      })
    } else {
      const { employees } = this.state
      const filtered = employees.filter(a => a.first_name && a.first_name.toLowerCase().match(txt))
      this.setState({
        filtered
      })
    }
  }
  showPersonDetails(event, selected) {
    this.setState({
      selectedPerson: selected
    })
  }
  render() {
    const {loading, filtered, selectedPerson} = this.state
    return (
      <div className="root-panel-wrapper">
        <Header 
          title="Employers" 
          onSeachRequest={this.handleSearch.bind(this)}
        />
        <div className="container">
          <div className="list">
            {loading && <p>loading...</p>}
            {(filtered && filtered.length && filtered.map( (person, $index) => 
              <Person 
                selected={this.state.selectedPerson === person} 
                person={person} 
                key={$index} 
                onShowPerson={(e, selected) => this.showPersonDetails(e, selected)} 
              />)
            ) || 'Haven\'t any results'}
          </div>
          <div className="selected">
            {selectedPerson && <PersonDetails person={selectedPerson}></PersonDetails>}
          </div>
        </div>
    </div>
    )
  }
}

export default Panel