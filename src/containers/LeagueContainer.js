import React from "react"
import PlayerContainer from "./PlayerContainer"
import UserTeamContainer from "./UserTeamContainer"
import LeagueInformation from "../components/LeagueInformation"

const LeagueContainer = () => {
  return (
  <div className="league-container">
    <LeagueInformation />
    <br/>
    <PlayerContainer />
    <UserTeamContainer />
  </div>
  )
}

export default LeagueContainer
