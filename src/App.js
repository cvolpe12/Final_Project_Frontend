import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LeagueContainer from "./containers/LeagueContainer"
import UserContainer from "./containers/UserContainer"
import Login from "./components/Login"
import { connect } from "react-redux"

class App extends Component {

  componentDidMount() {
		const jwt = localStorage.getItem('jwt')
		if (jwt){
			fetch("http://localhost:3001/api/v1/auto_login", {
				headers: {
					"Authorization": jwt
				}
			})
				.then(res => res.json())
				.then((response) => {
					if (response.errors) {
						alert(response.errors)
					} else {
						this.props.setCurrentUser(response)
					}
				})
		}
	}

  render() {
    return (
      <div className="App">
        <Login />
        <UserContainer />
        <LeagueContainer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    setCurrentUser: (user) => {dispatch({type: "SET_CURRENT_USERE", payload: user })}
  }
}

export default connect(null, mapDispatchToProps)(App);
