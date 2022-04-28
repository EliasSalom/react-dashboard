import React, { Component } from 'react'
import 'remixicon/fonts/remixicon.css'
import './Status.css';
export default class Live extends Component {
    render() {
        return (
            <div className="live">
                <label >Live</label>
                <i className="ri-loader-4-line"></i>
            </div>
        )
    }
}
