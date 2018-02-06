import React, { Component } from 'react';
import 'aframe';
// import { Entity, Scene } from 'aframe-react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import character from './character.json';
import {$,jQuery} from 'jquery';

export default class VRPanoramic extends Component {
    state = {
        character: character
    }

    // When this component mounts, grab the profile with _id or id of this.props.match.params.id or _id
    // e.g. localhost:3000/api/profile/1

/*    componentDidMount = () => {
        API.getProfile(this.props.match.params.id)
            .then(res => this.setState({ character: res.data }))
            .catch(err => console.log(err));
    } */
    
    componentWillUnmount() {    // Removes aframe classes when leaving this route
        $('html').removeClass('a-html');
        // document.html.classList.remove('a-html');
        document.body.classList.remove('a-body');
    }

    render() {
        // const { name } = this.props

        return ( 

            <a-scene>

              <a-assets>
                <img id="sky" src="./client/public/images/france.jpg"></img>
              </a-assets>
            <a-sky src="#sky" rotation="0 -130 0"> </a-sky>
            <a-text font="kelsonsans" value="My name is MJ! I was born in Germany, and grew
            up in New York ! Now I am in Los Angeles!" width="6" position="-2.5 0.25 -1.5"
              rotation="0 15 0"></a-text>
            </a-scene>
        )
    }
}