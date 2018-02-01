import {Entity} from 'aframe-react';
import React, {Component} from 'react';
// import {compose} from 'recompose';
import { connect } from 'react-redux';
import Member from '../components/CharacterDivs';
import { circularPositionFromIndex } from '../utils/calculations';
import { nextMemberType } from '../redux/actions';

const boxSize = 0.5

class Members extends Component {
  render () {

    // so here members is coming from props

    let members = this.props.members

    if (this.props.vrMode) {
      // if vrMode is on create this member 3d circle
      // seems like the whole thing is toggling two views the whole time
      // with either or vrMode
      return (
        <Entity>
          {members.map(this.renderMember.bind(this))}
          <a-animation attribute="rotation"
            dur="360000"
            fill="forwards"
            to="0 360 0"
            repeat="indefinite"
            easing="linear">
          </a-animation>
        </Entity>
      )
    } else {
      // here we are building the react members-container members, with a helper function and
      // higher order function map
      return (
        <div className="members-container">
          {members.map(this.renderMember.bind(this))}
        </div>
      )
    }
  }

  clickHandler = id => {
    console.log(id);
  }

  renderVR (member, index) {

  }

  // this is where all the props are being passed to the members in react (before VRmode)
  // this function is going to get its member arg from above
  renderMember (member, index) {
    let position = circularPositionFromIndex(index, boxSize)


    // when you click you get the id from member.get which is a react function?
    return (
      <Member
        key={index} id={member.id} name={member.name} photoUrl={member.image}
        type={member.type}
        width={boxSize} height={boxSize} depth={boxSize}
        position={position}
        background={member.backgroundImg}
        index={index}
        clickHandler={this.clickHandler}
        // onClick={this.props.onAvatarClicked}
        vrMode={this.props.vrMode} />
    )
  }

}

// setting the state of this components props as members and vr mode (2 layers of state)
// members is get('members ') which is ... coming from the list of members from the API call. part of the global object
// vrMode is getting vrMode which is ... the global immutable inital state being made in core.js?

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    members: state.get('members'),
    vrMode: state.get('vrMode')
  }
}

// here is where we find on Avatar click

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    onAvatarClicked: (memberId) => dispatch(nextMemberType(memberId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members)