import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import VRWorld from './pages/VRWorld';
import VRTry from './pages/VRTry';
import VRWater from './pages/VRWater';
import VRVideo from './pages/VRVideo';

export default class App extends Component { 
  
  render() {
    return (
      <Router>
        <div className="topLevel">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/motivationalWall" component={Home} />
            <Route exact path="/VR-World/:id" component={VRWorld} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
