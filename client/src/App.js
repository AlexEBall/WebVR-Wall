import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import VRWorld from './pages/VRWorld';

const App = () => 
  <Router>
    <div className="topLevel">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/VR-World/:id" component={VRWorld} />
      </Switch>
    </div>
  </Router>;

export default App;
