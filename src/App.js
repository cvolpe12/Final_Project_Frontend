import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LeagueContainer from "./containers/LeagueContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeagueContainer />
      </div>
    );
  }
}

export default App;
