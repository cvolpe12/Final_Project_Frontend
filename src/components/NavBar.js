import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {

  logout = () => {
		// localStorage.removeItem("token")
		this.props.logUserOut()
    localStorage.removeItem('jwt')
    // () => { this.props.history.push("/login") })
	}
  // <div class="ui menu">
  //   <p class="item">FANBALL</p>
  //
  //   <div class="right menu">
  //     <p class="item">
  //       <Link to={`/users/${this.props.currentUser.id}`}>
  //         Home
  //       </Link>
  //     </p>
  //     <p class="item">
  //       <Link to={`/leagues/create`}>
  //         Create League
  //       </Link>
  //     </p>
  //     <p class="item" onClick={this.logout}>
  //       <Link to={`/`}>
  //         Log Out
  //       </Link>
  //     </p>
  //   </div>
  // </div>

  render() {
    return (
      <Fragment>
      <div className="ui four item menu">
        <p className="item">FANBALL</p>

        <div className="right three item menu">
          <p className="item">
            <Link to={`/users/${this.props.currentUser.id}`}>
              Profile
            </Link>
          </p>
          <p className="item">
            <Link to={`/leagues/create`}>
              Create League
            </Link>
          </p>
          <p className="item" onClick={this.logout}>
            <Link to={`/`}>
              Log Out
            </Link>
          </p>
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
