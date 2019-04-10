import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import LeagueContainer from "./containers/LeagueContainer"
import UserContainer from "./containers/UserContainer"
import CreateLeagueForm from "./components/CreateLeagueForm"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import SignUpForm from "./components/SignUpForm"
import { connect } from "react-redux"

class App extends Component {

  componentDidMount() {
    // debugger
		const jwt = localStorage.getItem('jwt')
		if (jwt){
			fetch("http://localhost:3000/api/v1/auto_login", {
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
      <Grid>
        <Grid.Row centered>
        {this.props.currentUser ? (
          <NavBar/>
        ) : (
          null
        )}
          <Switch>
            <Route path="/" exact render={routerProps =>  <Login {...routerProps}/>} />
            <Route path="/users/:id" render={routerProps => <UserContainer {...routerProps}/>} />
            <Route path="/leagues/create" exact component={routerProps => <CreateLeagueForm {...routerProps}/>} />
            <Route path="/leagues/:id" component={routerProps => <LeagueContainer {...routerProps}/>} />
            <Route path="/signup" component={routerProps => <SignUpForm {...routerProps}/>} />
          </Switch>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    setCurrentUser: (user) => {dispatch({type: "SET_CURRENT_USER", payload: user })},
    logUserOut: () => {dispatch({type: "LOGOUT"})},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
