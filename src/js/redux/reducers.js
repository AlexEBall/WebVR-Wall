// These are all functions that produce some amount of data


import {INITIAL_STATE, setNextMemberType, enableVRMode, disableVRMode} from '../core'
// the 3 functions from core.js and the intial state


// 1 function avatarHandler being exported with the normal reducer syntax here
// seems like it's toggling back and forth some color but important to pass back
// the id or that .json data
export default function avatarHandler(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEXT_MEMBER_TYPE':
    // the white member in core is being passed in a value from this 2nd arg
      return state.update('members', membersState => setNextMemberType(membersState, action.memberId))
    case 'ENABLE_VR_MODE':
      return enableVRMode(state)
    case 'DISABLE_VR_MODE':
      return disableVRMode(state)
    // case 'GET_ID':
    //   return action.id
  }
  return state
}