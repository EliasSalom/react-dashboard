import React, { Component } from 'react';
import 'remixicon/fonts/remixicon.css'
import './Search_div.css';

export default class Search_div extends Component {
    render() {
        return (
            <div className="search-div">
                <input className="search-input" type="search" placeholder="Search" name="" id="" />
                
                <i className="ri-search-line"></i>
            </div>
        )
    }
}
