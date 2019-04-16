import React from "react";
import UserInfo from "../components/UserInfo"
import UserLeagues from "../components/UserLeagues"
import LeagueSuggestions from "./LeagueSuggestions"
// import { Link } from "react-router-dom";

class UserContainer extends React.Component {

  render() {
    return (
      <div>

        <UserInfo />
        <br/>
        <div>
          <h4>Leagues Entered:</h4>
          <UserLeagues />
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          <LeagueSuggestions />
        </div>
      </div>
    )
  }
}
export default UserContainer
