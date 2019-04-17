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
        <div className="ui four item inverted menu">
          <p className="item logo-navbar">FanDraft</p>

          <div className="right three item menu">
            <p className="item">
              <a href={`/users/${this.props.currentUser.id}`}>
                Profile
              </a>
            </p>
            <p className="item">
              <Link to={`/leagues/create`}>
                Create League
              </Link>
            </p>
            <p className="item" style={{ marginHeight: 14}} onClick={this.logout}>
              <Link to={`/`}>
                Log Out
              </Link>
            </p>
            <p className="item"></p>
          </div>
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
// <Fragment>
//   <div className="four wide column">
//     <div className="ui huge header">FanBall</div>
//   </div>
//   <div className="three wide column">
//     <Link to={`/users/${this.props.currentUser.id}`}>
//       <button className="big ui button">
//         Home
//       </button>
//     </Link>
//   </div>
//   <div className="three wide column">
//     <Link to={`/leagues/create`}>
//       <button className="big ui button">
//         Create League
//       </button>
//     </Link>
//   </div>
//   <div className="three wide column">
//     <Link to={`/`}>
//       <button className="big ui button" onClick={this.logout}>
//         LogOut
//       </button>
//     </Link>
//   </div>
// </Fragment>
