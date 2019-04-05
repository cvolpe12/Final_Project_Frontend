import React from "react"
import { connect } from "react-redux"
import Team from "../components/Team"

const UserTeamContainer = (props) => {

  const renderTeam = () => {
    console.log(props.team);
    return props.team.map(player => {
      return <Team key={player.id} player={player}/>
    })
  }

  console.log(props)
  return (
  <div className="">
  user team
    <div className="player-list">
      {renderTeam()}
    </div>
  </div>
  )
}

function mapStateToProps(state){
  return {
    team: state.team
  }
}

export default connect(mapStateToProps)(UserTeamContainer)
