import React, {Component} from 'react';
import AFRAME from 'aframe';
// import {Entity, Scene} from 'aframe-react';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import character from './character.json';
import model from './model.obj';
import material from './materials.mtl';
import $ from 'jquery';

/*import arrow_key_rotation from './vrvideo-helper';
import play_on_window_click from './vrvideo-helper';*/

export default class VRVideo extends React.Component {
    state = {
        character: character
    }

    // When this component mounts, grab the profile with _id or id of this.props.match.params.id or _id
    // e.g. localhost:3000/api/profile/1

/*    componentDidMount = () => {
        API.getProfile(this.props.match.params.id)
            .then(res => this.setState({ character: res.data }))
            .catch(err => console.log(err));
    } 
*/
    componentWillUnmount() {
        $('html').removeClass('a-html');
        // document.html.classList.remove('a-html');
        document.body.classList.remove('a-body');
    }

    render() {
        //const { name } = this.props
                                            
    return (       
       <a-scene>
        <a-scene id="vr-scene">
          <a-camera 
            id="camera"
            position="0 1.8 4"
            cursor-visible="true"
            cursor-scale="2" 
            cursor-color="#000000" 
            cursor-offset="2" 
            cursor-maxdistance="100"
            cursor-opacity="0.7"></a-camera>
         
          <a-assets>
            <video id="vid" src="https://ucarecdn.com/bcece0a8-86ce-460e-856b-40dac4875f15/"
            crossOrigin="anonymous"
            autoPlay="false"
            loop="true"
            styles={{display: 'none'}}></video>
          </a-assets>
         
          <a-entity geometry="primitive: sphere;
                              radius: 5000;
                              segmentsWidth: 64;
                              segmentsHeight: 64;"
                    material="shader: flat; src: #vid;"
                    scale="-1 1 1" />
         
          <a-text
                value={`${this.state.character}'s Gallery`}
                position="0.05 0.80 -2"
                rotation="0 180 0"
                font="mozillavr"
                color="#e43e31"
                side="double"
                align="center"
                width="6">
            </a-text>
        </a-scene>
        </a-scene>
    )
  }
}



  {/* <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/oscarmarinmiro/aframe-video-controls/master/dist/aframe-video-controls.min.js"></script>
  
    <a-scene>
      <a-assets>
        <video id="video_1" src="https://ucarecdn.com/bcece0a8-86ce-460e-856b-40dac4875f15/"></video>
      </a-assets>

      <a-camera position="0 0 5">
          <a-cursor id="cursor" color="yellow"></a-cursor>
      </a-camera>

      <a-videosphere src="#video_1" rotation="0 180 0"></a-videosphere>

      <a-entity video-controls="src:#video_1"></a-entity>

    </a-scene> */}






