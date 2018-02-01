// plain js object {}, which tells the reducer how to modify it's data.
// the action has only one property, the type property


// this 1st function is being passed to members.js
export function nextMemberType(memberId) {
  return { type: 'NEXT_MEMBER_TYPE', memberId }
}

export function enableVRMode() {
  return { type: 'ENABLE_VR_MODE' }
}

export function disableVRMode() {
  return { type: 'DISABLE_VR_MODE' }
}

// export function getId(id) {
// 	return { type: 'GET_ID', id }
// }