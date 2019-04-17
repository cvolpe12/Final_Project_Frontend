import React, { Fragment } from 'react'
import PlayerContainer from "./PlayerContainer"
import TeamContainer from "./TeamContainer"
import LeagueInformation from "../components/LeagueInformation"
import LeagueTeams from "../components/LeagueTeams"
import { connect } from "react-redux"

class LeagueContainer extends React.Component {

  state = {
    entered: false
  }

  enterLeague = () => {
    // debugger
    if (this.props.league.teams.length >= this.props.league.participants) {
      alert("This league is full.")
    } else {
      let leagueId = this.props.match.params.id
      fetch('http://localhost:3000/api/v1/teams', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "user_id": this.props.currentUser.id,
          "league_id": leagueId,
          "entered": false
        })
      })
      .then(res => res.json())
      .then(team => {
        this.props.setCurrentTeam(team)
        this.setState({
          entered: true
        })
      })
    }
  }

// this function will submit the team to the database with all the players
  teamIsEntered = () => {
    let teamId = this.props.currentTeam.id
    fetch(`http://localhost:3000/api/v1/teams/${teamId}/submitted`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "entered": true
      })
    })
    .then(res => res.json())
    .then(team => {
      this.props.setCurrentTeam(team)
      this.props.resetTeam()
    })
  }

  enterTeam = () => {
    const {catcher, first, second, third, short, out1, out2, out3, extra} = this.props.team
    if (catcher && first && second && third && short && out1 && out2 && out3 && extra) {
      console.log("team entered");
      this.teamIsEntered()
    } else {
      alert("team not full")
    }
  }

  renderContainers = () => {
    let leagueId = this.props.match.params.id
    if (this.props.currentUser) {
      let team = this.props.currentUser.teams.find(team => team.league_id === parseInt(leagueId))
      team = team || this.props.currentTeam
      // debugger
      this.props.setCurrentTeam(team)
      // if the current users leagues include the webpage league then render container
      if (this.state.entered === true || this.props.currentUser.leagues.some(league => league.id === parseInt(this.props.match.params.id))) {
        // debugger
        if (team.entered === false) {
          return (
            <div className="select-player">
              <PlayerContainer />
              <TeamContainer />
              <div>
                <button className="small ui button" onClick={this.enterTeam}>Submit Team</button>
              </div>
            </div>
          )
        }
        else {
          return (
          <Fragment>
            <LeagueTeams {...this.props}/>
          </Fragment>
        )}
      } else {
        return (
          <div className="enter-league">
            <button className="huge ui button" onClick={this.enterLeague}>Enter League</button>
          </div>
        )
      }
    } else {
      // console.log("nothing is rendering");
      return null
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div className="application">
      <div>
        <LeagueInformation {...this.props}/>
        <br/>
        <div className="league-container">
          {this.renderContainers()}
        </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    team: state.team,
    currentTeam: state.currentTeam,
    league: state.league
  }
}

function mapDispatchToProps(dispatch){
  return {
    setCurrentTeam: (team) => {dispatch({type: "SET_CURRENT_TEAM", payload: team })},
    resetTeam: () => {dispatch({type: "EMPTY_TEAM"})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeagueContainer)
