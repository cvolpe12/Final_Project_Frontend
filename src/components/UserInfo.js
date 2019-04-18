import React from "react";
import { connect } from "react-redux"

class UserInfo extends React.Component {

  // this will render information based on logging in

  // <p>name:{this.props.currentUser.name}</p>
  render() {
    // console.log(this.props.currentUser);
    return (
      <div>
        <h2 className="welcome-user">Welcome {this.props.currentUser.username}!</h2>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(UserInfo)
