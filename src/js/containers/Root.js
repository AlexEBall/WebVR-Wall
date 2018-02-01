import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Wrapper from './Wrapper'


// the store is what holds the reducers and the state
// has a reference to both of them

export default class Root extends Component {
  render() {
    const { store } = this.props
    // console.log(this.props);
    return (
      <Provider store={store}>
        <Wrapper/>
      </Provider>
    )
  }
}

// seems to make sure the store is containg only objects which it should
// and if not throw an error

Root.propTypes = {
  store: PropTypes.object.isRequired
}
