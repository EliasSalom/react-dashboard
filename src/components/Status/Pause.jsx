import React, { Component } from 'react'
import 'remixicon/fonts/remixicon.css'
import './Status.css';
export default class Pause extends Component {
    render() {
        return (
            <div className="pause">
                <label >Pause</label>
                <i className="ri-check-double-fill"></i>
            </div>
        )
    }
}
