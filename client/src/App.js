import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MotivationalWall from './pages/MotivationalWall';
import VRWorld from './pages/VRWorld';
import VRGallery from './pages/VRGallery';
import VRWater from './pages/VRWater';
import VRVideo from './pages/VRVideo';
import VRPanoramic from './pages/VRPanoramic';
<<<<<<< HEAD
//import Utils from "./utils/API";
=======
import VRBeach from './pages/VRBeach';
// import VRPanoramic from '.pages/VRPanoramic';
// 
>>>>>>> ff9a568a0c02e15cb219cf07dab678f17896fef2

export default class App extends Component { 

/*  componentDidMount(){
    Utils.getProfiles()
    .then((response) => {
      console.log("Response: ", response.data);
    })
    .catch((err) => {
      console.log("Error");
    }); 
  }
  */
  render() {

    return (
      <Router>
        <div className="topLevel">
          <Switch>
<<<<<<< HEAD
            <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/" component={Home} />
            <Route exact path="/VR-World/:id" component={VRPanoramic} />
=======
            <Route exact path="/" component={LandingPage} />
            <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/motivationalWall" component={MotivationalWall} />
            <Route exact path="/VR-World/:id" component={VRBeach} />
>>>>>>> ff9a568a0c02e15cb219cf07dab678f17896fef2
          </Switch>
        </div>
      </Router>
    );
  }
}

