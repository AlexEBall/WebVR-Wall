import React, {Component} from 'react';
import 'aframe';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import $ from 'jquery';

export default class VRPanoramic extends Component {
    state = {
        character: []
    }

    componentDidMount = () => {
        const url_id = (this.props.match.url)
        const id = url_id.split("VR-World/")[1];

        API
            .getProfile(id)
            .then(res => this.setState({character: res.data}))
            .catch(err => console.log(err));
    }

    componentWillUnmount() { // Removes aframe classes when leaving this route
        $('html').removeClass('a-html');
        document
            .body
            .classList
            .remove('a-body');
    }

    render() {
        return (
            <a-scene>
                <a-sky src={`.${this.state.character.VR360Image}`} rotation="0 -80 0"></a-sky>
                <a-entity
                    id="camera"
                    camera
                    position="0 1.6 0"
                    rotation="-1.146 17.991 0"
                    wasd-controls="acceleration: 1"
                    look-controls>
                </a-entity>
                <a-text
                    font="kelsonsans"
                    value={`${this.state.character.fullName}\n ${this.state.character.briefStory}`}
                    color="#220007"
                    width="12"
                    align="center"
                    position="-5.622 6.942 -13.854"
                    rotation="0 18.793015680291003 0">
                </a-text>
            </a-scene>
        )
    }
}
