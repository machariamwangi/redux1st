import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from "redux";
import reducer from "./reducers";
const initialState = {
  state: "react"
};
const store = createStore(reducer, initialState);

class App extends Component {
  state = store.getState();
  // state removed
  render() {
    // return <HelloWorld tech={store.getState().tech} />;
    return <HelloWorld tech={this.state.store} />;
  }
}

export default App;
