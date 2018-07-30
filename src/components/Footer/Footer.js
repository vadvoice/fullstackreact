import React, { Component } from 'react'
import './Footer.scss'

class Footer extends Component {
    render() {
        return ( 
             <footer className="footer">
                <div className="footer-social">
                    <ul>
                        <li className="social-frame">
                            <div className="icon-frame facebook">
                                <a className="fa fa-facebook" href="#"></a>
                            </div>
                        </li>
                        <li className="social-frame">
                            <div className="icon-frame twitter">
                                <a className="fa fa-twitter" href="#"></a>
                            </div>
                        </li>
                        <li className="social-frame">
                            <div className="icon-frame youtube">
                                <a className="fa fa-youtube" href="#"></a>
                            </div>
                        </li>
                        <li className="social-frame">
                            <div className="icon-frame vine">
                                <a className="fa fa-vine" href="#"></a>
                            </div>
                        </li>
                        <li className="social-frame">
                            <div className="icon-frame instagram">
                                <a className="fa fa-instagram" href="#"></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Aricle</a></li>
                        <li><a href="#">Poll</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Aricle</a></li>
                        <li><a href="#">Poll</a></li>
                        <li><a href="#">Connect</a></li>
                    </ul>
                </div>

                <div className="copyright">
                    <a href="">Copyright 2018. All rights reserved</a>
                </div>
            </footer>
        );
    }
}

export default Footer