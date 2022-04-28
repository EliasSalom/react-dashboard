import React, { Component } from 'react';
import './Top_navbar.css';
import Logo from '../Logo/Logo';
import Search_div from '../Search_div/Search_div';
import 'remixicon/fonts/remixicon.css'


import Profile_img from '../../icon/person.jpg';

export default class Top_navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Logo />
                <Search_div />
                <div class="right-side">
                    <i className="ri-notification-3-fill marg"></i>
                    <i className="ri-message-2-fill marg"></i>
                    <label className="marg" for="">John marios</label>
                    <img className="icon marg" src={Profile_img} alt="profile" />
                </div>
            </div>
        )
    }
}
