import React, { Component } from 'react'
import './Table.css';
import Search_div from '../Search_div/Search_div';
import 'remixicon/fonts/remixicon.css'
import Campaign from '../Campaign/Campaign';

// icons
import More from '../../icon/more.png';
import Personal from '../../icon/person.jpg'
import Search from '../../icon/search.png'
import Sort from '../../icon/sort.png'

//Status Components
import Done from '../Status/Done';
import Pause from '../Status/Pause';
import Draft from '../Status/Draft';
import Live from '../Status/Live';

export default class table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (
            <div className="table-section">
                <div className="title-section">
                    <ul class="ul-table">
                        <li>Wishlist</li>
                        <li>Agenda</li>
                        <li>Outgoing</li>
                        <li>Incoming</li>
                    </ul>
                </div>
                <div className="table-flex">
                    <div className="status-section">
                        <Campaign/>
                    </div>
                    <div>
                        <div>
                            <div className="search-section">
                                <div className="search-table">
                                    <Search_div />
                                </div>
                            </div>
                            <table>
                                <tbody>
                                    <tr className="table-title">
                                        <th><input type="checkbox" name="" id="" /></th>
                                        <th></th>
                                        <th>Full name <a href=""><img className="icon" src={Sort} alt="" /></a></th>
                                        <th>User ID <a href=""><img className="icon" src={Sort} alt="" /></a></th>
                                        <th>Company <a href=""><img className="icon" src={Sort} alt="" /></a></th>
                                        <th>Job position <a href=""><img className="icon" src={Sort} alt="" /></a></th>
                                        <th><img className="icon" src={More} alt="" /></th>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" /></td>
                                        <td className="img-td"><img className="personal-img" src={Personal} alt="profile-img" /></td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>293849533</td>
                                        <td>Microsof</td>
                                        <td>CEO</td>
                                        <th><img className="icon" src={More} alt="" /></th>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" /></td>
                                        <td className="img-td"><img className="personal-img" src={Personal} alt="profile-img" /></td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>293849533</td>
                                        <td>Microsof</td>
                                        <td>CEO</td>
                                        <th><img className="icon" src={More} alt="" /></th>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" name="" id="" /></td>
                                        <td className="img-td"><img className="personal-img" src={Personal} alt="profile-img" /></td>
                                        <td>Alfreds Futterkiste</td>
                                        <td>293849533</td>
                                        <td>Microsof</td>
                                        <td>CEO</td>
                                        <th><img className="icon" src={More} alt="" /></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
