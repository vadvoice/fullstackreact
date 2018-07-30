import React, { Component } from 'react'
import './Navigation.scss'

import {
  Link
} from 'react-router-dom'

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

class Navigation extends Component {
    toggleOpen(event) {
      event.preventDefault()
      event.target.classList.toggle('btn_active')
    }
    render() {
        return ( 
          <div className="navigation-wrapper">
            <div className="header-button-wrapper">
              <div 
                className="menu-btn" 
                onClick={(e) => this.toggleOpen(e)}
                >
               <div className="menu-icon">
                  <Icon icon={bars}/>
               </div>
                {
                  (links && links.length) && links.map((l, i) => 
                      <Link to={ `${l.name}` } key={`icon-${i}`} className={`link ${l.name}`}><Icon icon={l.icon} /></Link>)
                }
              </div>
            </div>
          </div>
        );
    }
}

export default Navigation
