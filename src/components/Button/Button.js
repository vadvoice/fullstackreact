import React, { Component } from 'react'
import './Button.scss'

class Button extends Component {
    doingSomething(e) {
        console.log(e)
    }
    render() {
        const { placeholder, log } = this.props
        return ( <button 
        	className = "btn draw-border"
            onClick = {
                (e) => this.doingSomething(e) } >
            { placeholder } 
            </button>
        );
    }
}

export default Button