import React from "react";
import { connect } from "react-redux"

class UserInfo extends React.Component {

  // this will render information based on logging in

  // <p>name:{this.props.currentUser.name}</p>
  render() {
    console.log(this.props.currentUser);
    return (
      <div>
        <h4>Welcome {this.props.currentUser.username}!</h4>
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
