import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './SearchForm.scss'
import * as FontAwesome from 'react-icons/lib/fa'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.name = 'search-form'
  }

  render() {
    const { searchVisible } = this.props
    let searchClasses = ['search-box']
    if(searchVisible) {
      searchClasses.push('active')
      setTimeout(()=> this.refs.searchInput.focus(),500)
    }

    return (
      <form
        onSubmit= {this.props.handleSubmit}
      >
        <input 
          ref="searchInput"
          onInput={this.props.filterRequest}
          className={searchClasses.join(' ')}
          type="search"
          name="search"
          placeholder="search" ></input>
        <FontAwesome.FaSearch 
          className="icon" 
          onClick={this.props.openSearchBox}
        />
      </form>
    )
  }
}

SearchForm.propTypes = {
  openSearchBox: PropTypes.func,
  handleSubmit: PropTypes.func,
  searchVisible: PropTypes.bool.isRequired
}

export default SearchForm