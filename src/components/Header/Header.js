import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchFrom from '../SearchForm/SearchForm'

import './Header.css'
import * as FontAwesome from 'react-icons/lib/fa'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVisible: false,
      filterStr: '',
    }
  }
  submitData(e) {
    e.preventDefault()
    this.props.onSeachRequest(this.state.filterStr)
  }
  visibleRequest() {
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }
  setFilterString(e) {
    this.setState({
      filterStr: e.target.value
    })
  }
  refreshData(data) {
    this.setState({
      employees: data
    })
  }
  
  // componentWillReceiveProps(nextProps) {
  //   console.log('bam!!!: ', nextProps)
  //   console.log('curent state: ', this.state)
  // }

  render() {
    return (
      <header className="header">
        <FontAwesome.FaBars className="icon" />
        <h2>{this.props.title}</h2>
        <div className="search-block">
          <SearchFrom 
            searchVisible= { this.state.searchVisible }
            openSearchBox= { this.visibleRequest.bind(this) }
            handleSubmit={ $event => this.submitData($event) }
            filterRequest= { $event => this.setFilterString($event) }
          />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  onSeachRequest: PropTypes.func,
}

export default Header;

