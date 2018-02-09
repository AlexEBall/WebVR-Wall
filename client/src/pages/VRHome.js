import React, {Component} from 'react';
import 'aframe';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import gltf from '../3DModels/medieval_asian_harbor/scene.gltf';
// import home from '../3DModels/home';
// import material from '../3DModels/materials.mtl';
import $ from 'jquery';

export default class VRHome extends Component {
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
                <a-gltf-model src={gltf}></a-gltf-model>
            </a-scene>
        );
    }
}