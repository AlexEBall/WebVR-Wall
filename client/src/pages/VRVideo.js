import React, {Component} from 'react';
import AFRAME from 'aframe';
// import {Entity, Scene} from 'aframe-react';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import character from './character.json';
// import model from './model.obj';
// import material from './materials.mtl';
import {$,jQuery} from 'jquery';

export default class VRVideo extends React.Component {
    state = {
        character: character
    }


    AFRAME.registerComponent('arrow-key-rotation', {
      schema: {
        enabled: {default: true},
        dx: {default: 2.0},
        dy: {default: 2.0},
      },
      init: function () {
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.directionX = 0;
        this.directionY = 0;
      },
      play: function () {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
      },
      pause: function () {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keyup', this.onKeyUp);          
      },
      onKeyDown: function (evt) {
        switch (evt.keyCode) {
          case 37: this.directionX = 1; break;
          case 38: this.directionY = 1; break;
          case 39: this.directionX = -1; break;
          case 40: this.directionY = -1; break;
        }
      },
      onKeyUp: function (evt) {
        switch (evt.keyCode) {
          case 37: this.directionX = 0; break;
          case 38: this.directionY = 0; break;
          case 39: this.directionX = 0; break;
          case 40: this.directionY = 0; break;
        }          
      },
      tick: function (t, dt) {
        if (!this.data.enabled) { return; }
        var rotation = this.el.getAttribute('rotation');
        if (!rotation) { return; }
        if (this.directionX || this.directionY) {
          rotation.x += this.data.dx * this.directionY;
          rotation.y += this.data.dy * this.directionX;
          this.el.setAttribute('rotation', rotation);
        }
      }
    })

    AFRAME.registerComponent('play-on-window-click', {
      init: function () {
        this.onClick = this.onClick.bind(this);
      },
      play: function () {
        window.addEventListener('click', this.onClick);
      },
      pause: function () {
        window.removeEventListener('click', this.onClick);
      },
      onClick: function (evt) {
        var video = this.el.components.material.material.map.image;
        if (!video) { return; }
        video.play();
      }
    })


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

/*   
    MORE CODE HERE: https://github.com/ngokevin/aframe-react/blob/master/src/index.js
    componentWillUnmount () {
    const el = this.el;
    const props = this.props;

    if (props.events) {
      // Remove events.
      Object.keys(props.events).forEach(eventName => {
        removeEventListeners(el, eventName, props.events[eventName]);
      });
    }
  }*/

    render() {
        const { name } = this.props

    return (
    <a-scene>
        <a-videosphere rotation="0 180 0" src="#video" play-on-window-click>
        </a-videosphere>

        <a-camera user-height="0" wasd-controls-enabled="true" arrow-key-rotation>
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
    )
  }
}
