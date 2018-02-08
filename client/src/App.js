import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MotivationalWall from './pages/MotivationalWall';
import VRWorld from './pages/VRWorld';
import VRTry from './pages/VRTry';
import VRWater from './pages/VRWater';
import VRVideo from './pages/VRVideo';
// import VRPanoramic from '.pages/VRPanoramic';
// 

export default class App extends Component { 
  
  render() {
    return (
      <Router>
        <div className="topLevel">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/motivationalWall" component={MotivationalWall} />
            <Route exact path="/VR-World/:id" component={VRVideo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

