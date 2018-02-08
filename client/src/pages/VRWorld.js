import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import $ from 'jquery';

export default class VRWorld extends Component {
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
    
    // Removes aframe classes when leaving this route
    componentWillUnmount() {    
        $('html').removeClass('a-html');
        document.body.classList.remove('a-body');
    }

    render() {
        // const { name } = this.props

        return ( 
            <Scene >
                <Entity primitive='a-torus' color ="hotpink" position="0 1.25 -5" radius="2" />
                <Entity primitive='a-torus' color ="orange" position="0 1.25 -5" radius="4" radius-tubular ="0.2" />
                <Entity primitive='a-torus' color="blue" position="0 1.25 -5" radius="3" radius-tubular="0.2" />
                <Entity primitive='a-torus' color="red" position="0 1.25 -5" radius="5" radius-tubular="0.2" />

                <Entity primitive='a-text' value={`Hello ${this.state.character.name}!`} position = "-0.8 1.7 -2.9" color = "black" width = "7" />

                <Entity primitive='a-box' position ="0.01 1.7 -3" rotation="0 0 0" width="2" height="0.5" depth="0.1" color="khaki" />

                <Entity primitive='a-cylinder' position=" 1 1 -3" rotation="0 45 0" radius="0.1" height="2" depth="0.2" color="magenta" />
                <Entity primitive='a-cylinder' position="-1 1 -3" rotation="0 45 0" radius="0.1" height="2" depth="0.2" color = "magenta" />

                <Entity primitive='a-plane' position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" />
                <Entity primitive='a-sky' color="lightblue" />
            </Scene>
        )
    }
}