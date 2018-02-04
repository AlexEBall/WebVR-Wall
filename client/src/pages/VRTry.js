import React, {Component} from 'react';
import 'aframe';
// import {Entity, Scene} from 'aframe-react';
import {Link} from 'react-router-dom';
// import API from '../../utils/API';
import character from './character.json';
import model from './model.obj';
import material from './materials.mtl';
import $ from 'jquery';

export default class VRTry extends Component {
    state = {
        character: character
    }

    // When this component mounts, grab the book with the _id of
    // this.props.match.params.id e.g. localhost:3000/books/599dcb67f0f16317844583fc
    // componentDidMount = () => {     API.getProfile(this.props.match.params.id)
    //      .then(res => this.setState({ character: res.data }))         .catch(err
    // => console.log(err)); }

    // Removes aframe classes when leaving this route
    componentWillUnmount() {
        $('html').removeClass('a-html');
        // document.html.classList.remove('a-html');
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