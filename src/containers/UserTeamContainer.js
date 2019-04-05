import React from "react"
import { connect } from "react-redux"
import Team from "../components/Team"

class UserTeamContainer extends React.Component {

  componentDidMount() {
    // need to use team id for this part - currently hardcoding 1
    fetch("http://localhost:3000/api/v1/teams/1")
      .then(res => res.json())
      .then(team => {
        console.log(team.players);
        team.players.map(player => {
          this.props.addPlayerToTeam(player)
        })
      })
  }

  renderTeam = () => {
    console.log(this.props.team);
    return this.props.team.map(player => {
      return <Team key={player.id} player={player}/>
    })
  }

  render() {
    console.log(this.props)
    return (
    <div className="">
    user team
    <br/>
    <br/>
      <div className="player-list">
        {this.renderTeam()}
      </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    team: state.team
  }
}

function mapDispatchToProps(dispatch){
  return {
    addPlayerToTeam: (player) => {dispatch({type: "ADD_PLAYER_TO_TEAM", payload: player })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTeamContainer)
