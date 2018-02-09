import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavMobile extends Component {

    // get better bootstrap nav

    render() {
        return (
            <div className="header">
                <div className="navMobile-wrapper">
                    <div className="navMobile-wrapper__nav">
                        <Link to={`/`} className="navMobile-wrapper__link">
                            <img className="logo" src="../images/logo.png" alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}