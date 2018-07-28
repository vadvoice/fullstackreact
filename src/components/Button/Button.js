import React, { Component } from 'react'
import './Button.scss'

class Button extends Component {
    doingSomething(e) {
        console.log(e)
    }
    render() {
        const { placeholder, propAction } = this.props
        const action = propAction ? propAction : this.doingSomething
        return ( <button 
        	className = "btn draw-border"
            onClick = {(e) => {
                    action(e)
                }
            }
            >
            { placeholder } 
            </button>
        );
    }
}

export default Button