import React from "react";
import { connect } from "react-redux"
import SubmittedTeam from "./SubmittedTeam"

class LeagueTeams extends React.Component {

  state = {
    enteredTeams: ""
  }

  componentDidMount(){
    let leagueId = this.props.match.params.id
    fetch(`http://localhost:3000/api/v1/leagues/${leagueId}`)
    .then(res => res.json())
    .then(league => {
      this.props.setLeague(league)
    })
    fetch(`http://localhost:3000/api/v1/teams`)
    .then(res=>res.json())
    .then(teams => {
      let allTeams = teams.filter(team => team.league_id === parseInt(leagueId))
      let enteredTeams = allTeams.filter(team => team.entered === true)
      // debugger
      this.setState({
        enteredTeams: [...enteredTeams]
      })
    })
  }

  renderEnteredTeams = () => {
    // fetch all team players based on team id
    if (this.state.enteredTeams) {
      // console.log(this.state.enteredTeams);
      return this.state.enteredTeams.map(team => {
        // debugger
          return (
            <div>
              <SubmittedTeam key={team.id} team={team}/>

            </div>
          )
        })
    } else {
      // console.log("enteredTeams is nothing");
      return null
    }
  }

  render() {
    return (
        <div className="league-team" itemsPerRow={4}>
            {this.renderEnteredTeams()}
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    league: state.league
  }
}
function mapDispatchToProps(dispatch){
  return {
    setLeague: (league) => {dispatch({type: "SET_LEAGUE", payload: league })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeagueTeams)
