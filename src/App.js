import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
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

  logout = () => {
		// localStorage.removeItem("token")
		this.props.logUserOut()
    // () => { this.props.history.push("/login") })
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
    setCurrentUser: (user) => {dispatch({type: "SET_CURRENT_USER", payload: user })},
    logUserOut: () => {dispatch({type: "LOGOUT"})},
  }
}

export default connect(null, mapDispatchToProps)(App);
