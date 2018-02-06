import React, { Component } from 'react';
import 'aframe';
// import { Entity, Scene } from 'aframe-react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import character from './character.json';
import {$,jQuery} from 'jquery';

export default class VRScene extends Component {
    state = {
        character: character
    }

    // When this component mounts, grab the profile with _id or id of this.props.match.params.id or _id
    // e.g. localhost:3000/api/profile/1
/*
    componentDidMount = () => {
        API.getProfile(this.props.match.params.id)
            .then(res => this.setState({ character: res.data }))
            .catch(err => console.log(err));
    } */
    
    componentWillUnmount() {    // Removes aframe classes when leaving this route
        $('html').removeClass('a-html');
        // document.html.classList.remove('a-html');
        document.body.classList.remove('a-body');
    }

    render() {
        // const { name } = this.props

        return ( 
      <a-scene>
        <a-assets>
          <img id="city" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg" data-position="0 0 0" alt="Table de conférence"></img>
        </a-assets>
      
      <a-sky src="#city" rotation="0 0 0"></a-sky> 
      <a-circle position="-8 -5 2" 
                rotation="90 0 0"
                geometry="radius: 1;"                
                material="side: double;">
                </a-circle>

      <a-entity id="camera-container" rotation="0 100 0">
           
      <a-entity id="camera" look-controls camera="fov: 80; userHeight: 0" wasd-controls="enabled: false;" >
        <a-animation attribute="rotation"
                  dur="1000"
                  begin="animation__fuse-complete"
                  from="-31.2 4 0"
                  to="2 5.5 0">
                  </a-animation>
        <a-entity id="cursor" cursor="fuse: true; fuseTimeout: 100"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.013; radiusOuter: 0.02"
            material="color: #000; shader: flat"
            
            animation__fuse="startEvents: fusing;
                        property: scale;
                        dur: 1000;
                        to: 0.4 0.4 0.4"
            animation__fuseed="startEvents: animation__fuse-complete;
                        property: scale;
                        dur: 1;
                        to: 1 1 1">
            </a-entity>
        </a-entity>
      
      </a-entity>
            <a-text
                value={`${this.state.character.name}'s Gallery. A brief
                bio on my life and how I got here! I am really 
                fascinated by computers and coding! I realized
                early on in life that working hard works!`}
                position="0.05 0.80"
                rotation="0 360 0"
                font="mozillavr"
                color="#fff"
                side="double"
                align="center"
                width="6">
            </a-text>
      </a-scene>
        )
    }
}