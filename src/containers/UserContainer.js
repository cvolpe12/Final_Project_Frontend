import React from "react";
import UserInfo from "../components/UserInfo"
import UserLeagues from "../components/UserLeagues"
import LeagueSuggestions from "./LeagueSuggestions"
// import { Link } from "react-router-dom";

class UserContainer extends React.Component {

  render() {
    return (
      <div className="application">
      <div className="user-container">
        <UserInfo />
        <br/>
        <div>
          <h3>Leagues Entered:</h3>
          <UserLeagues />
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          <LeagueSuggestions />
        </div>
        </div>
      </div>
    )
  }
}
export default UserContainer
