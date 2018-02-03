import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import VRWorld from './pages/VRWorld';
import VRTry from './pages/VRTry';
import VRWater from './pages/Water';

export default class App extends Component { 
  
  render() {
    return (
      <Router>
        <div className="topLevel">
          <Switch>
            <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/" component={Home} />
            <Route exact path="/VR-World/:id" component={VRWater} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
