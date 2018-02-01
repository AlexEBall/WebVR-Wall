import React, { Component } from 'react'
import { Entity } from 'aframe-react'
import classNames from 'classnames'
import { TYPE_TO_COLOR_MAP } from '../core'

// from member to members

export default class Member extends Component {
  render () {
    const { id, name, photoUrl, background } = this.props

    console.log(this.props);

    // if we are in vrmode render this entity with all the member blocks, positioning them from 
    // props.position. There are a ton of props
    if (this.props.vrMode) {
      const { width, height, depth } = this.props
      const { x, y, z } = this.props.position
      const color = `#${TYPE_TO_COLOR_MAP[this.props.type || '']}`

      return (
        <Entity geometry={{'primitive': 'box', width: width, height: height, depth: depth}}
                material={{src: `url(${photoUrl})`, color}}
                position={`${x} ${y} ${z}`}
                onClick={() => {this.props.onClick(id) }} />
      )

      // else use this react rendering with classnames used to change class member on the click, 
      // props. type
    } else {
      var memberClass = classNames({
        'member-component': true,
        'member-component__hipster': this.props.type === 'hipster',
        'member-component__hacker': this.props.type === 'hacker',
        'member-component__hustler': this.props.type === 'hustler'
      })
      // diffeerentList should render here maybe made into separate component
      return (
        <div className="list">
          <div 
              className={`list-row list-row-${id} ${memberClass}`} 
              // onClick={() => {this.props.onClick(id)}}
              key={id}
              style={{backgroundImage: `url(${background})`}}>
              <h3>{(name).charAt(0)}</h3>
              <h2>{name}</h2>
              <img className="profileImg" src={photoUrl} alt="zelda character" />
              <button 
                className="button button__VR"
                onClick={() => this.props.onAvatarClicked()}>Experience My VR World</button>
          </div>
        </div>
      )
    }
  }
}
