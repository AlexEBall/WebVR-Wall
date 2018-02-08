import React, { Component } from 'react';
import 'aframe';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import $ from 'jquery';

export default class VRWater extends Component {
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
          <div>
          <a-scene fog="type: exponential; color: #FFF; density: 0.06;">
          <a-entity camera="userHeight: 1.6"
                    universal-controls="movementEnabled: true"> 
          </a-entity>

          <a-ocean width="50" depth="50" density="40"></a-ocean>
          <a-cylinder radius="1" height="50" color="#39BB82" position="0 -24.5 0"></a-cylinder>
          <a-cylinder radius="1" height="50" color="#39BB82" position="5 -24.5 0"></a-cylinder>
          <a-cylinder radius="1" height="50" color="#39BB82" position="-5 -24.5 0"></a-cylinder>
          <a-entity light="type: hemisphere; color: #AAA; groundColor: #000000; intensity: 0.9;"></a-entity>
          <a-entity light="type: ambient; color: #DC8874; intensity: 0.5;"></a-entity>
        </a-scene>
        </div>
        );

    }
}