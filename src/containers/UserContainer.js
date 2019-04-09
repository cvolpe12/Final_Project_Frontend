import React from "react";
import UserInfo from "../components/UserInfo"
import UserLeagues from "../components/UserLeagues"

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
