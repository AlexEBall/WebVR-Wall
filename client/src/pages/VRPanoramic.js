import React, { Component } from 'react';
import 'aframe';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import $ from 'jquery';

export default class VRPanoramic extends Component {
    state = {
        character: []
    }

    // When this component mounts, grab the profile with _id or id of this.props.match.params.id or _id
    // e.g. localhost:3000/api/profile/1

    componentDidMount = () => {
        API.getProfile(this.props.match.params.id)
            .then(res => this.setState({ character: res.data }))
            .catch(err => console.log(err));
    } 
    
    componentWillUnmount() {    // Removes aframe classes when leaving this route
        $('html').removeClass('a-html');
        document.body.classList.remove('a-body');
    }

    render() {
        // const { name } = this.props

        return ( 
        <a-scene>
            <a-sky src="../images/france.jpg" rotation="0 -130 0"></a-sky>
            <a-text font="kelsonsans" value="Leo Marose " width="6" position="-2.5 0.25 -1.5"
                    rotation="0 15 0">
            </a-text>
        </a-scene>
        )
    }
}