import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './redux/store';

// 

// import { getMembers } from './utils/meetupApi';
import { getData } from './utils/CharacterToState';
import { INITIAL_STATE } from './core';

// console.log(getMembers);
console.log(getData);

const initialState = INITIAL_STATE.set('members', getData());
const store = configureStore(initialState);

render(
	<Root store={store} vrMode={store.getState().get('vrMode')} />,
    document.getElementById('root')
);



// getMembers().then(members => {
//   const initialState = INITIAL_STATE.set('members', members)
//   const store = configureStore(initialState)

//   render(
//     <Root store={store} vrMode={store.getState().get('vrMode')} />,
//     document.getElementById('root')
//   )
// }).catch(error => {
//   console.error(error.stack)
// })
