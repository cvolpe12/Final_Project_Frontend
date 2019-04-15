import React from "react";
import UserInfo from "../components/UserInfo"
import UserLeagues from "../components/UserLeagues"
import LeagueSuggestions from "./LeagueSuggestions"
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
        <LeagueSuggestions />
      </div>
    )
  }
}
export default UserContainer
