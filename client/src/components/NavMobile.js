import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavMobile extends Component {

    // get better bootstrap nav

    render() {
        return (
            <header>
                <div className="nav-wrapper">
                    <div className="nav-wrapper__nav">
                        <a className="nav-wrapper__link" href="#">Home</a>
                    </div>
                </div>
            </header>
        );
    }
}