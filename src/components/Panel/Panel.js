import React, { Component } from 'react'
import Header from '../Header/Header';
import Person from '../Person/Person';
import PersonDetails from '../PersonDetails/PersonDetails';
import Button from '../Button/Button'
import ReactModal from '../Modal/Modal'

import './Panel.scss'

class Panel extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      employees: [],
      modalOpen: false
    }
  }
  componentDidMount() {
    // TODO localhost database!
    // fetch('http://localhost:1234/people')

    fetch('https://raw.githubusercontent.com/vadvoice/dbFiles/master/persons.json')
      .then(res => res.json())
      .then(r => this.refreshData(r))
      .catch(err => console.error(err))
  }
  refreshData(data) {
    this.setState({
      employees: data,
      filtered: data
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
  log(e) {
    console.log(e)
  }
  openModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }
  render() {
    const { loading, filtered, selectedPerson } = this.state
    const { currentTime } = this.props
    return (
      <div className="root-panel-wrapper">
        <Header 
          title="Employers" 
          onSeachRequest={this.handleSearch.bind(this)}
          currentTime={currentTime}
          {...this.props}
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
            {selectedPerson && <div>
              <PersonDetails person={selectedPerson}></PersonDetails>
              {/* <Button 
                placeholder='details'
              ></Button> */}
              <button
                onClick={(e) => this.openModal()}
              >Details</button>
              <ReactModal
                toggleRequest={this.openModal.bind(this)}
                toggleStatus={this.state.modalOpen}
                info={selectedPerson}
              ></ReactModal>
            </div>}
          </div>
        </div>
    </div>
    )
  }
}

export default Panel