import React, {Component} from 'react';
import 'aframe';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import model from '../3DModels/model.obj';
import material from '../3DModels/materials.mtl';
import $ from 'jquery';

export default class VRTry extends Component {
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

    componentWillUnmount() {
        $('html').removeClass('a-html');
        document.body.classList.remove('a-body');
    }

    render() {
        // const { name } = this.props

        return (
            <a-scene>
            <a-assets>
                <a-asset-item id="gallery-obj" src={model}></a-asset-item>
                <a-asset-item id="gallery-mtl" src={material}></a-asset-item>
            </a-assets>
            <a-entity obj-model="obj: #gallery-obj; mtl: #gallery-mtl"></a-entity>
            <a-entity id="camera" camera position="0 0.5 -3.0" rotation="0 180 0" wasd-controls look-controls></a-entity>
            <a-text
                value={`${this.state.character.name}'s Gallery`}
                position="0.05 0.80 -2"
                rotation="0 180 0"
                font="mozillavr"
                color="#e43e31"
                side="double"
                align="center"
                width="6">
            </a-text>
        </a-scene>
        );
    }
}