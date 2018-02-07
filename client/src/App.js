import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import VRWorld from './pages/VRWorld';
import VRTry from './pages/VRTry';
import VRWater from './pages/VRWater';
import VRVideo from './pages/VRVideo';
import VRPanoramic from './pages/VRPanoramic';
import Utils from "./utils/API";

export default class App extends Component { 

  componentDidMount(){
    Utils.getProfiles()
    .then((response) => {
      console.log("Response: ", response.data);
    })
    .catch((err) => {
      console.log("Error");
    }); 
  }
  render() {

    return (
      <Router>
        <div className="topLevel">
          <Switch>
            <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/" component={Home} />
            <Route exact path="/VR-World/:id" component={VRPanoramic} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
