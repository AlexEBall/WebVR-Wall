import React, {Component} from 'react';
import 'aframe';
// import {Entity, Scene} from 'aframe-react';
import {Link} from 'react-router-dom';
// import API from '../../utils/API';
import character from './character.json';
// import model from './model.obj';
// import material from './materials.mtl';
import $ from 'jquery';

export default class VRWater extends Component {
    state = {
        character: character
    }

    // When this component mounts, grab the book with the _id of
    // this.props.match.params.id e.g. localhost:3000/books/599dcb67f0f16317844583fc
    // componentDidMount = () => {     API.getProfile(this.props.match.params.id)
    //   .then(res => this.setState({ character: res.data }))         .catch(err =>
    // console.log(err)); } 
    
    // Removes aframe classes when leaving this route
    componentWillUnmount() {
        $('html').removeClass('a-html');
        // document.html.classList.remove('a-html');
        document.body.classList.remove('a-body');
    }

    render() {
        // const { name } = this.props

        return (
            <a-scene fog="type: exponential; color: #FFF; density: 0.06;">

                <a-entity camera="userHeight: 1.6"
                            universal-controls="movementEnabled: false">
                </a-entity>

            
                <a-ocean width="50" depth="50" density="40"></a-ocean>


                <a-cylinder radius="1" height="50" color="#39BB82" position="0 -24.5 0"></a-cylinder>
                <a-cylinder radius="1" height="50" color="#39BB82" position="5 -24.5 0"></a-cylinder>
                <a-cylinder radius="1" height="50" color="#39BB82" position="-5 -24.5 0"></a-cylinder>


                <a-entity light="type: hemisphere; color: #AAA; groundColor: #000000; intensity: 0.9;"></a-entity>
                <a-entity light="type: ambient; color: #DC8874; intensity: 0.5;"></a-entity>
            </a-scene>
        );

    }
}