import React, { Component } from "react";

import Axios from "axios";

import Main from "./containers/Main/Main";
import logo from "./logo.svg";
import "./App.css";

Axios.defaults.baseURL = "https://api.github.com";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Main />
      </div>
    );
  }
}

export default App;
