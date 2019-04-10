import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux"

class NavBar extends React.Component {

  logout = () => {
		// localStorage.removeItem("token")
		this.props.logUserOut()
    localStorage.removeItem('jwt')
    // () => { this.props.history.push("/login") })
	}

  render() {
    return (
      <Fragment>
        <div className="six wide column">
          FanBall
        </div>
        <div className="three wide column">
          <Link to={`/users/${this.props.currentUser.id}`}>
            <button className="big ui button">
              Home
            </button>
          </Link>
        </div>
        <div className="three wide column">
          <Link to={`/leagues/create`}>
            <button className="big ui button">
              Create League
            </button>
          </Link>
        </div>
        <div className="three wide column">
          <Link to={`/`}>
            <button className="big ui button" onClick={this.logout}>
              LogOut
            </button>
          </Link>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    logUserOut: () => {dispatch({type: "LOGOUT"})},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
