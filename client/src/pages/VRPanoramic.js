import React, { Component } from 'react';
import 'aframe';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import roostermtl from '../3DModels/Rooster.mtl';
import roosterobj from '../3DModels/Rooster.obj';
import $ from 'jquery';

export default class VRPanoramic extends Component {
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
        // const { name } = this.props

        return ( 
        <a-scene>
            <a-assets>
                <a-asset-item id="rooster-obj" src={roosterobj}></a-asset-item>
                <a-asset-item id="rooster-mtl" src={roostermtl}></a-asset-item>
                <img id="my-texture" src="../images/Rooster_BaseColor.png" />
            </a-assets>
            <a-entity 
                obj-model="obj: #rooster-obj; mtl: #rooster-mtl" 
                scale="0.5 0.5 0.5" 
                rotation="0 -90 25.726"
                position="2.191 -0.995 -3.584"
                material="src: #my-texture">
            </a-entity>
            <a-sky src="../images/france.jpg" rotation="0 -80 0"></a-sky>
            <a-text font="kelsonsans" value={`${this.state.character.fullName}\n ${this.state.character.briefStory}`} 
                    color="#220007" width="12" align="center" position="-1.788 4.539 -13.854" rotation="0 0 0" >
            </a-text>
        </a-scene>
        )
    }
}