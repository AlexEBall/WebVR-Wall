import React, {Component} from 'react';
import {compose} from 'recompose';
import DifferentList from "./components/DifferntList";
import withInfiniteScroll from "./components/InfiniteScroll";
import Characters from './characters.json';
import './App.css';

console.log(Characters);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Characters: Characters,
      page: null,
      isLoading: false
    };
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
          isLoading={this.state.isLoading}
          page={this.state.page}
          onPaginatedSearch={this.onPaginatedSearch}/>
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

// const ListWithLoadingWithPaginated = compose(withPaginated, withLoading)(DifferentList);

const ListWithLoadingWithInfinite = compose(
// withPaginated,
withInfiniteScroll, withLoading)(DifferentList);

export default App;