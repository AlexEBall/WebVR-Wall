import React, {Component} from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import character from './character.json';
import model from './model.obj';
import material from './materials.mtl';
import {$,jQuery} from 'jquery';

export default class VRVideo extends React.Component {
    state = {
        character: character
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
        // document.html.classList.remove('a-html');
        document.body.classList.remove('a-body');
    }

    render() {
        // const { name } = this.props

    return (
    <a-scene>
        <a-videosphere rotation="0 180 0" src="#video" 
                     play-on-window-click
                     play-on-vrdisplayactivate-or-enter-vr>
        </a-videosphere>
        <a-camera user-height="0" wasd-controls-enabled="false" arrow-key-rotation>
        <a-entity id="msg" position="0 -0.3 -1.5" text="align:center; 
                width:3;
                wrapCount:100;
                color:red;
                value:Click window to make the video play, if needed."
                hide-once-playing="#video">
        </a-entity>
        </a-camera>      
        <a-assets>
        
        <video id="video" style="display:none" 
               autoplay loop crossorigin="anonymous" playsinline webkit-playsinline>
          <source type="video/mp4"
               src="https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/" />
        </video>
      </a-assets>
    </a-scene>
    )
  }
}
