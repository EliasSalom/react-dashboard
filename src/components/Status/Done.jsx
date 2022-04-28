import React, { Component } from 'react'
import 'remixicon/fonts/remixicon.css'
import './Status.css';
export default class Done extends Component {
    render() {
        return (
            <div className="done">
                <label >Done</label>
                <i className="ri-check-double-fill"></i>
            </div>
        )
    }
}
