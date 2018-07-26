import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchFrom from '../SearchForm/SearchForm'

import './Header.scss'

import Icon from 'react-icons-kit';
import { bars } from 'react-icons-kit/fa/bars';
import { home } from 'react-icons-kit/icomoon/home';
import { pacman } from 'react-icons-kit/icomoon/pacman';
import { bullhorn } from 'react-icons-kit/icomoon/bullhorn';
import { connection } from 'react-icons-kit/icomoon/connection';
import { location2 } from 'react-icons-kit/icomoon/location2';
import { bubbles } from 'react-icons-kit/icomoon/bubbles';
import { scissors } from 'react-icons-kit/icomoon/scissors';
import { amazon } from 'react-icons-kit/icomoon/amazon';

const links = [
  {name: 'home', icon: home},
  {name: 'pacman', icon: pacman},
  {name: 'bullhorn', icon: bullhorn},
  {name: 'connection', icon: connection},
  {name: 'location2', icon: location2},
  {name: 'bubbles', icon: bubbles},
  {name: 'scissors', icon: scissors},
  {name: 'amazon', icon: amazon}
]

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

  toggleOpen(event) {
    event.preventDefault()
    event.target.classList.toggle('btn_active')
  }

  render() {
    return (
      <header className="header">
        <div className="header-button-wrapper">
 
          <div 
            className="menu-btn" 
            onClick={(e) => this.toggleOpen(e)}
            >
           <div className="menu-icon">
              <Icon icon={bars}/>
           </div>
            {
              (links && links.length) && links.map((l, i) => <a key={`icon-${i}`} className={`link ${l.name}`}>
                  <Icon icon={l.icon} />
                </a>)
            }
          </div>

        </div>
        
        <h2>{this.props.title}<br/><small>Start time: {new Date(this.props.currentTime).toLocaleString()}</small></h2>
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

