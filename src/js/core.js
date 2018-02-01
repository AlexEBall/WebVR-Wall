import {Map} from 'immutable'

// all the get and set are from immutable and probably update?

// immutable map with vrMode being false to set as the inital state
// the state is the application's data
// what are app uses
export const INITIAL_STATE = Map({vrMode: false})
export const MEMBER_TYPES = ['hustler', 'hipster', 'hacker', '']

export const TYPE_TO_COLOR_MAP = {
  '': 'ffffff',
  'hustler': 'ff8800',
  'hipster': '32e600',
  'hacker': 'b400e6'
}

// here is where he builds the getter and setter. core must be a library that lets you build
// constructor functions? if it's set, you do the first which sets the member type name to be
// manipulated in css

// this function is adding member type to the state object?

export function setNextMemberType(membersState, memberId) {

  function getNextMemberType(member) {
    let typeIndex = MEMBER_TYPES.indexOf(member.get('type'));
    typeIndex++;
    if (typeIndex >= MEMBER_TYPES.length) {
      typeIndex = 0;
    }
    return MEMBER_TYPES[typeIndex]
  }

  // looks like this is going to update the member (replacing the id of that member if it is equal to the memberId)
// setting the member to hustler, hipster, ...

// need smth like id ==== id so that i can show one persons vr world

  return membersState.update(
    membersState.findIndex(member => { return member.get('id') === memberId }),
    member => { return member.set('type', getNextMemberType(member)) }
  )
}

export function enableVRMode(state) {
  return state.set('vrMode', true)
}

export function disableVRMode(state) {
  return state.set('vrMode', false)
}