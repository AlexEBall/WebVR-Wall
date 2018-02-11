
import React, {Component} from 'react';
import AFRAME from 'aframe';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import $ from 'jquery';

export default class VRVideo extends React.Component {
    state = {
        character: []
    }

    // When this component mounts, grab the profile with _id or id of
    // this.props.match.params.id or _id e.g. localhost:3000/api/profile/1

    componentDidMount = () => {
        const url_id = (this.props.match.url)
        const id = url_id.split("VR-World/")[1];
        
        API.getProfile(id)
            .then(res => this.setState({character: res.data}))
            .catch(err => console.log(err));
    }

    componentWillUnmount() {
        $('html').removeClass('a-html');
        document
            .body
            .classList
            .remove('a-body');
    }

    render() {
        const {name} = this.props

        return (

            <a-scene>
                <a-assets>
                    <video
                        id="vrvideo"
                        autoPlay
                        loop="true"
                        src="../images/vrvideo.mp4"
                        webkit-playsinline/>
                </a-assets>

                <a-videosphere src="#vrvideo"></a-videosphere>
                <a-text
                    font="roboto"
                    value={`${this.state.character.fullName}\n ${this.state.character.briefStory}`}
                    color="#220007"
                    width="12"
                    align="center"
                    position="-1.788 4.539 -13.854"
                    rotation="0 0 0">
                </a-text>
            </a-scene>
        )
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> cc111a82bfd54ec3048e2fc4948ceca35af81239
