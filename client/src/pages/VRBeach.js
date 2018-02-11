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
                <a-entity obj-model="obj: #beach-obj; mtl: #beach-mtl"></a-entity>
                <a-entity
                    id="camera"
                    camera
                    position="0 0.5 -3.0"
                    rotation="0 180 0"
                    wasd-controls
                    look-controls>
                </a-entity>
            </a-scene>
        );
    }
}