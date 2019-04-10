import React, { Fragment } from 'react'
import PlayerContainer from "./PlayerContainer"
import TeamContainer from "./TeamContainer"
import LeagueInformation from "../components/LeagueInformation"
import { connect } from "react-redux"

class LeagueContainer extends React.Component {

  enterLeague = () => {
    let leagueId = this.props.match.params.id
    fetch('http://localhost:3000/api/v1/teams', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "user_id": this.props.currentUser.id,
        "league_id": leagueId
      })
    })
    .then(res => res.json())
    .then(team => {
      this.props.setTeam(team)
    })
  }

  renderContainers = () => {
    if (this.props.currentUser) {
      if (!this.props.currentUser.leagues.some(league => league.id === parseInt(this.props.match.params.id))) {
        return (
          <button onClick={this.enterLeague}>Enter League</button>
        )
      } else {
        return (
          <Fragment>
            <PlayerContainer />
            <TeamContainer />
          </Fragment>
        )
      }
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="league-container">
        <LeagueInformation {...this.props}/>
        {this.renderContainers()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    team: state.team
  }
}

function mapDispatchToProps(dispatch){
  return {
    setTeam: (team) => {dispatch({type: "SET_CURRENT_TEAM", payload: team })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeagueContainer)
