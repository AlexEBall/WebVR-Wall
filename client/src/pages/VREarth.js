import React, {Component} from 'react';
import 'aframe';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import model from '../3DModels/earth_obj.obj';
import material from '../3DModels/earth_mtl.mtl';
import $ from 'jquery';

export default class VREarth extends Component {
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

        // This content is published under a CC-BY license. 
        // Author: Smirnoff Alexander https://poly.google.com/view/53DjTbNlu9z

        return (
            <a-scene>
                <a-assets>
                    <a-asset-item id="earth_obj" src={model}></a-asset-item>
                    <a-asset-item id="earth_mtl" src={material}></a-asset-item>
                    <img id="earth" src="../images/earth.jpg"></img>
                </a-assets>
            
            <a-entity 
                obj-model="obj: #earth_obj; mtl: #earth_mtl" 
                scale="0.5 0.5 0.5" 
                rotation="0 -90 25.726"
                position="2.191 -0.995 -3.584"
                material="src: #earth_mtl"
                id="camera"
                position="0 0.5 -3.0"
                rotation="0 180 0"
                wasd-controls
                look-controls>
            </a-entity>

            <a-sky src="#earth">
            
            <a-animation attribute="rotation"
              dur="25000"
              from= "0 0 0"
              to="0 360 0"
              easing= "linear"     
              repeat="indefinite"></a-animation>
            </a-sky>

            <a-text font="kelsonsans" value={`${this.state.character.fullName}\n ${this.state.character.briefStory}`} 
            color="#fff" width="12" align="center" position="-1.788 4.539 -13.854" rotation="0 0 0" >
            </a-text>
                    
            </a-scene>
        );
    }
}