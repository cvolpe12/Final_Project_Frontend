import React from "react";
import UserInfo from "../components/UserInfo"
import UserLeagues from "../components/UserLeagues"
import CreateLeagueForm from "../components/CreateLeagueForm"
import { Link } from "react-router-dom";

class UserContainer extends React.Component {

  render() {
    return (
      <div>
        <h1>User Page</h1>
        <UserInfo />
        <Link to={`/leagues/create`}>
          <button class="big ui button">
            Create League
          </button>
        </Link>
        <br/>
        <UserLeagues />
        <p>history of games</p>
        <p>suggested leagues </p>
      </div>
    )
  }
}
export default UserContainer
