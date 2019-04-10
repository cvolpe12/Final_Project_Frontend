import React from "react";
import UserInfo from "../components/UserInfo"
import UserLeagues from "../components/UserLeagues"
// import { Link } from "react-router-dom";

class UserContainer extends React.Component {

  render() {
    return (
      <div>
        <h1>User Page</h1>
        <UserInfo />
        <br/>
        <UserLeagues />
        <p>history of games</p>
        <p>suggested leagues </p>
      </div>
    )
  }
}
export default UserContainer
