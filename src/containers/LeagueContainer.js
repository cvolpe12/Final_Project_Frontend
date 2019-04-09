import React from "react"
import PlayerContainer from "./PlayerContainer"
import TeamContainer from "./TeamContainer"
import LeagueInformation from "../components/LeagueInformation"

const LeagueContainer = (props) => {
  return (
  <div className="league-container">
    <LeagueInformation {...props}/>
    <br/>
    <PlayerContainer />
    <TeamContainer />
  </div>
  )
}

export default LeagueContainer
