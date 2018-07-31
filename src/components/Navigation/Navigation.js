import React, { Component } from 'react'
import './Navigation.scss'

import {
  Link
} from 'react-router-dom'

import Logo from '../../img/logo.svg';

import Icon from 'react-icons-kit';
import { bars } from 'react-icons-kit/fa/bars';
import { home } from 'react-icons-kit/icomoon/home';
import { pacman } from 'react-icons-kit/icomoon/pacman';
import { bullhorn } from 'react-icons-kit/icomoon/bullhorn';
import { connection } from 'react-icons-kit/icomoon/connection';
import { location2 } from 'react-icons-kit/icomoon/location2';
import { bubbles } from 'react-icons-kit/icomoon/bubbles';
import { scissors } from 'react-icons-kit/icomoon/scissors';
// import { amazon } from 'react-icons-kit/icomoon/amazon';
import { github } from 'react-icons-kit/icomoon/github'

const links = [
  {name: 'home', icon: home},
  {name: 'pacman', icon: pacman},
  {name: 'bullhorn', icon: bullhorn},
  {name: 'connection', icon: connection},
  {name: 'location2', icon: location2},
  {name: 'bubbles', icon: bubbles},
  {name: 'scissors', icon: scissors},
  {name: 'github', icon: github}
]

class Navigation extends Component {
    constructor() {
      super()
      this.selected = null
    }
    toggleOpen(event) {
      event.preventDefault()
      event.target.parentNode.classList.toggle('btn_active')
    }
    setToActive(event) {
      const target = event.target
      if (target.tagName !== 'A') return

      this.highlight(target)
    }
    highlight(node) {
      if (this.selected) {
        this.selected.classList.remove('highlight')
      }
      this.selected = node
      this.selected.classList.add('highlight')
    }
    render() {
        return ( 
          <div className="navigation-wrapper">
            <Link to="/home">
              <img src={Logo} className="navigation-logo" alt="logo" />
            </Link>
            <div className="header-button-wrapper">
              <div 
                className="menu-btn" 
                >
               <div 
                className="menu-icon"
                onClick={(e) => this.toggleOpen(e)}
                >
                  <Icon icon={bars}/>
               </div>
                {
                  (links && links.length) && links.map((l, i) => 
                      <Link 
                        to={ `${l.name}` }
                        key={`icon-${i}`}
                        className={`link link-${l.name} ${l.name}`}
                        onClick={(e) => this.setToActive(e)}
                        >
                          <Icon icon={l.icon} />
                      </Link>)
                }
              </div>
            </div>
          </div>
        );
    }
}

export default Navigation
