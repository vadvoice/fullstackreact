import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import Logo from '../../img/logo.svg';

import Icon from 'react-icons-kit';
import { facebook } from 'react-icons-kit/icomoon/facebook';
import { telegram } from 'react-icons-kit/icomoon/telegram';
import { instagram } from 'react-icons-kit/icomoon/instagram';
import { twitter } from 'react-icons-kit/icomoon/twitter';

import './Footer.scss'

const links = [
  {name: 'facebook', icon: facebook, link: '#'},
  {name: 'telegram', icon: telegram, link: '#'},
  {name: 'instagram', icon: instagram, link: '#'},
  {name: 'twitter', icon: twitter, link: '#'},
]

class Footer extends Component {
    render() {
        return ( 
             <footer className="footer">
                <img src={Logo} alt="logo" />
                <div 
                className="footer-social"
                >
                    <ul>
                        {links && links.map((link, i) => <li
                            key= { `footer-social-icon-${link.name}` }>
                            <Link
                                to={ link.link }
                            >
                                <Icon
                                    icon={ link.icon }
                                    className='footer-social-icon'
                                >
                                </Icon>
                            </Link>
                        </li>)}
                    </ul>
                </div>
                <div
                    className="footer-anchor"
                ></div>
                <small 
                    className="footer-copyright"
                >
                    <Link to="somewhere">Copyright 2018. All rights reserved</Link>
                </small>
            </footer>
        );
    }
}

export default Footer