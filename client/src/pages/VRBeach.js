import React, {Component} from 'react';
import 'aframe';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import model from '../3DModels/little-private-beach.obj';
import material from '../3DModels/little-private-beach.mtl';
import $ from 'jquery';

export default class VRBeach extends Component {
    state = {
        character: []
    }

    // When this component mounts, grab the profile with _id or id of
    // this.props.match.params.id or _id e.g. localhost:3000/api/profile/1

    componentDidMount = () => {
        API
            .getProfile(this.props.match.params.id)
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
                    <a-asset-item id="beach-obj" src={model}></a-asset-item>
                    <a-asset-item id="beach-mtl" src={material}></a-asset-item>
                </a-assets>
                <a-entity obj-model="obj: #beach-obj; mtl: #beach-mtl" position="0 -0.136 0"></a-entity>
                <a-entity
                    id="camera"
                    camera
                    position="0.099 -0.121 -0.1106436787501768"
                    rotation="0.115 92.337 0"
                    wasd-controls="acceleration: 1"
                    look-controls>
                </a-entity>
                <a-sky src="../images/ocean.jpg" rotation="0 -80 0"></a-sky>
                <a-text 
                    value={this.state.character.briefStory}
                    position="-0.381 -0.21 -0.063"
                    rotation="-17.24602963343778 88.4646835681991 -0.11459155902616465"
                    color="#000"
                    width="0.5"
                    baseline="bottom"
                    align="center">
                </a-text>
            </a-scene>
        );
    }
}
{/* <a-entity id="camera" camera="active:false" position="0.099 -0.121 -0.1106436787501768" rotation="1.9484649444186273 104.59829681579978 0" wasd-controls="" look-controls="" data-aframe-inspector-original-camera=""></a-entity> */}