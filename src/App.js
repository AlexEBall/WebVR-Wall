import React, {Component} from 'react';
import {compose} from 'recompose';
import DifferentList from "./components/DifferntList";
import withInfiniteScroll from "./components/InfiniteScroll";
import Characters from './characters.json';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Characters: Characters,
      page: null,
      isLoading: false
    };
  }

  clickHandler = id => {
    console.log(id);
  }

  render() {
    return (
      <div className="page">
        <div className="interactions">
          <form type="submit" onSubmit={this.onInitialSearch}>
            <input type="text" ref={node => this.input = node}/>
            <button type="submit">Search</button>
          </form>
        </div>

        <ListWithLoadingWithInfinite
          characters={this.state.Characters}
          clickHandler={this.clickHandler}
          isLoading={this.state.isLoading} />
      </div>
    );
  }
}

const withLoading = (Component) => (props) => 
<div>
  <Component {...props} />

  <div className="interactions">
    {props.isLoading && <span>Loading...</span>}
  </div>
</div>

const ListWithLoadingWithInfinite = compose(withInfiniteScroll, withLoading)(DifferentList);

export default App;