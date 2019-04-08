import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LeagueContainer from "./containers/LeagueContainer"
import UserContainer from "./containers/UserContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserContainer />
        <LeagueContainer />
      </div>
    );
  }
}

export default App;
