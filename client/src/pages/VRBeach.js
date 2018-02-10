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
                    <a-asset-item id="beach-obj" src={model}></a-asset-item>
                    <a-asset-item id="beach-mtl" src={material}></a-asset-item>
                </a-assets>
                <a-entity obj-model="obj: #beach-obj; mtl: #beach-mtl" position="0 -0.136 0"></a-entity>
                <a-entity
                    id="camera"
                    camera
                    position="0.093 -0.121 -0.054"
                    rotation="0.115 92.337 0"
                    wasd-controls="acceleration: 1"
                    look-controls>
                </a-entity>
                <a-sky src="../images/ocean.jpg" rotation="0 -80 0"></a-sky>
                <a-text 
                    value={this.state.character.briefStory}
                    position="-0.381 -0.21 -0.063"
                    rotation = "-8.136 88.52197934771219 -0.34377467707849396"
                    color="#000"
                    width="0.5"
                    baseline="bottom"
                    align="center">
                </a-text>
            </a-scene>
        );
    }
}

