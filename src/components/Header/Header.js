import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchFrom from '../SearchForm/SearchForm'

import './Header.scss'

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
    this.props.onSeachRequest(this.props.searchStr)
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

  render() {
    return (
      <header className="header">

        <h2>{this.props.title}<br/><small>Start time: {new Date(this.props.currentTime).toLocaleString()}</small></h2>
        <div className="search-block">
          <SearchFrom 
            searchVisible= { this.state.searchVisible }
            openSearchBox= { this.visibleRequest.bind(this) }
            handleSubmit={ $event => this.submitData($event) }
            filterRequest= { $event => this.setFilterString($event) }
            {...this.props}
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

