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
      this.props.setTeam(team)
      this.setState({
        entered: true
      })
    })
  }

  teamIsEntered = () => {
    let teamId = this.props.currentTeam.id
    fetch(`http://localhost:3000/api/v1/teams/${teamId}`, {
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
      this.props.setTeam(team)
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
    if (this.props.currentUser) {
      console.log("state", this.state.entered === false);
      console.log(this.props.currentUser.leagues.some(league => league.id === parseInt(this.props.match.params.id)));
      // if the current users leagues include the webpage league then render container
      if (this.state.entered === true || this.props.currentUser.leagues.some(league => league.id === parseInt(this.props.match.params.id))) {
        // debugger
        if (!!this.props.currentTeam.entered === false) {
          return (
            <Fragment>
              <PlayerContainer />
              <TeamContainer />
              <div>
                <button className="small ui button" onClick={this.enterTeam}>Submit Team</button>
              </div>
            </Fragment>
          )
        } else {
          return (
          <Fragment>
            <LeagueTeams />
          </Fragment>
        )}
      } else {
        return (
          <button className="huge ui button" onClick={this.enterLeague}>Enter League</button>
        )
      }
    } else {
      console.log("nothing is rendering");
      return null
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <LeagueInformation {...this.props}/>
        <br/>
        <div className="league-container">
          {this.renderContainers()}
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
    setTeam: (team) => {dispatch({type: "SET_CURRENT_TEAM", payload: team })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeagueContainer)
