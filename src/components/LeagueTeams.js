import React from "react";
import { connect } from "react-redux"

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
      debugger
      this.setState({
        enteredTeams: enteredTeams
      })
    })
  }

  renderEnteredTeams = () => {
    console.log(this.props.league);
    console.log(this.state.enteredTeams);
    // fetch all team players based on team id
  }

  render() {
    return (
      <div>
        league team should be rendered
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

// <div class="ui card">
//   <div class="content">
//     <div class="header">Cute Dog</div>
//     <div class="meta">2 days ago</div>
//     <div class="description">
//       <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
//       <p>Many people also have their own barometers for what makes a cute dog.</p>
//     </div>
//   </div>
// </div>
