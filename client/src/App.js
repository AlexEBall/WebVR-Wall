import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MotivationalWall from './pages/MotivationalWall';
import VRWorld from './pages/VRWorld';
import VRGallery from './pages/VRGallery';
import VRVideo from './pages/VRVideo';
import VRPanoramic from './pages/VRPanoramic';
import VRPanoramic2 from './pages/VRPanoramic2';
import VRBeach from './pages/VRBeach';
import VRHome from './pages/VRHome';
import VRHelicopter from './pages/VRHelicopter';
import VREarth from './pages/VREarth';

// first route is for jan de wulf, basically they go in order from here
// https://sheltered-badlands-98413.herokuapp.com/api

// 1 helicopter
// 2 beach (give credit)
// 3 skatepark (panoramic)
// 4 gallery (give credit)
// 5 Earth (give credit)
// 6 VRVideo 

export default class App extends Component { 

  
  render() {
    return (
      <Router>
        <div className="topLevel">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/motivationalWall" component={MotivationalWall} />
            <Route exact path="/VR-World/5a7bd4b214984f0014e74aef" component={VRHelicopter} />
            <Route exact path="/VR-World/5a7bd49f14984f0014e74aee" component={VRBeach} />
            <Route exact path="/VR-World/5a7bd36e14984f0014e74aec" component={VRPanoramic} />
            <Route exact path="/VR-World/5a7bd36e14984f0014e74aec" component={VRPanoramic2} />
            <Route exact path="/VR-World/5a7bd35d14984f0014e74aeb" component={VRGallery} />
            <Route exact path="/VR-World/5a7bd34714984f0014e74aea" component={VREarth} />
            <Route exact path="/VR-World/5a7bd2c914984f0014e74ae9" component={VRVideo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

