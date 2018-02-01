import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Entity} from 'aframe-react'
import { disableVRMode, enableVRMode } from '../redux/actions'

const styles = require('../../scss/VRModeSwitcher.scss')

// this component is toggling between vrModes with buttons
// importing to reducers, connecting them, maping State to props and dispatching actions

class VRModeSwitcher extends Component {
  render () {
    if (this.props.vrMode) {
      return (
        <Entity geometry={{'primitive': 'sphere', radius: 1}}
                material={{color: 'red'}}
                position={'0 -2 0'}
                onClick={() => console.log('hit')} />
      )
    } else {
      return (
        <div className="vrModeSwitcher-container">
          <button onClick={this.props.enableVRMode}>Enter virtual reality mode</button>
        </div>
      )
    }
  }
}

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    vrMode: state.get('vrMode')
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    disableVRMode: () => dispatch(disableVRMode()),
    enableVRMode: () => dispatch(enableVRMode())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VRModeSwitcher)