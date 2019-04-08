import React from "react"
import PlayerContainer from "./PlayerContainer"
import TeamContainer from "./TeamContainer"
import LeagueInformation from "../components/LeagueInformation"

const LeagueContainer = () => {
  return (
  <div className="league-container">
    <LeagueInformation />
    <br/>
    <PlayerContainer />
    <TeamContainer />
  </div>
  )
}

export default LeagueContainer
