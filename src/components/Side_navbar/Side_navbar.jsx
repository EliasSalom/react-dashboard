import React, { Component } from 'react'
import './side_navbar.css'
import 'remixicon/fonts/remixicon.css'


import Menu from '../../icon/menu.png';
import Calendar from '../../icon/calendar.png';
import Poll from '../../icon/poll.png';
import Presentation from '../../icon/presentation.png';
import Settings from '../../icon/settings.png';

export default class Side_navbar extends Component {
    render() {
        return (
            <div class="vertical-Navbar">
                <div className="first-element grey-color">
                    <i className="ri-layout-top-fill ri-fw"></i>
                </div>
                <div className="grey-color center-elemnt">
                    <i className="ri-layout-masonry-fill ri-fw"></i>
                    <i className="ri-calendar-todo-fill ri-fw"></i>
                    <i className="ri-bar-chart-fill ri-fw"></i>
                    <i className="ri-slideshow-fill ri-fw"></i>
                    <i className="ri-settings-4-fill ri-fw"></i>
                </div>
                <div className="last-elemnt grey-color">
                    <i className="ri-question-line ri-fw"></i>
                    <i className="ri-arrow-right-s-line ri-fw"></i>
                </div>
            </div>
        )
    }
}
