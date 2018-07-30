import React, { Component } from 'react'
import './NotFound.scss'

class NotFound extends Component {
    render() {
		const { title, status } = this.props
        return (
            <div className="text-wrapper">
                <p className="title" title="error">ಠ_ಠ</p>
                <p className="explanation" title="error">Nothing to see here - move on</p>
            </div>
        );
    }
}

export default NotFound