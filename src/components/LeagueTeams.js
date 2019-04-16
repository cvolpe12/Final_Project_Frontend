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
      // debugger
      this.setState({
        enteredTeams: [...enteredTeams]
      })
    })
  }

  renderScore = player => {
    let score = player.game_hits + (player.game_doubles * 2) + (player.game_triples * 3) + (player.game_home_runs * 4) + player.game_rbi + player.game_runs + player.game_walks
    return score
  }

  findCatcher = (team) => {
    let player = team.players.find(player => player.position === "C" && player.extra_player === false)
    return (
      <div>
        <p>C: {player.name}</p>
        <p>Points: {this.renderScore(player)}</p>
        <p class="meta">
        Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}
        </p>
      </div>
    )
  }
  findFirst = (team) => {
    let player = team.players.find(player => player.position === "1B" && player.extra_player === false)
    return (
      <div>
        <p>1B: {player.name}</p>
        <p>Points: {this.renderScore(player)}</p>
        <p class="meta">
        Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}
        </p>
      </div>
    )
  }
  findSecond = (team) => {
    let player = team.players.find(player => player.position === "2B" && player.extra_player === false)
    return (
      <div>
        <p>2B: {player.name}</p>
        <p>Points: {this.renderScore(player)}</p>
        <p class="meta">
        Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}
        </p>
      </div>
    )
  }
  findThird = (team) => {
    let player = team.players.find(player => player.position === "3B" && player.extra_player === false)
    return (
      <div>
        <p>3B: {player.name}</p>
        <p>Points: {this.renderScore(player)}</p>
        <p class="meta">
        Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}
        </p>
      </div>
    )
  }
  findShort = (team) => {
    let player = team.players.find(player => player.position === "SS" && player.extra_player === false)
    return (
      <div>
        <p>SS: {player.name}</p>
        <p>Points: {this.renderScore(player)}</p>
        <p class="meta">
        Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}
        </p>
      </div>
    )
  }
  findOutfield = (team) => {
    let outfielders = team.players.filter(player => player.position === "OF" && player.extra_player === false)
    return outfielders.map(player => {
      return (
        <div>
          <p>OF: {player.name}</p>
          <p>Points: {this.renderScore(player)}</p>
          <p class="meta">
          Hits: {player.game_hits} |
          Doubles: {player.game_doubles} |
          Triples: {player.game_triples} |
          HR: {player.game_home_runs} |
          RBI: {player.game_rbi} |
          Runs: {player.game_runs} |
          Walks: {player.game_walks}
          </p>
        </div>
      )
    })
  }
  findExtra = (team) => {
    let player = team.players.find(player => player.extra_player === true)
    // debugger
    return (
      <div>
        <p>XH: {player.name}</p>
        <p>Points: {this.renderScore(player)}</p>
        <p class="meta">
        Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}
        </p>
      </div>
    )
  }



  renderEnteredTeams = () => {
    console.log(this.props.league);
    // fetch all team players based on team id
    if (this.state.enteredTeams) {
      console.log(this.state.enteredTeams);
      return this.state.enteredTeams.map(team => {
        // debugger
          return (
              <div className="ui card">
                <div className="content">
                  <div className="header">{team.user.username}</div>
                  <div className="description">
                    {this.findCatcher(team)}
                    {this.findFirst(team)}
                    {this.findSecond(team)}
                    {this.findThird(team)}
                    {this.findShort(team)}
                    {this.findOutfield(team)}
                    {this.findExtra(team)}
                  </div>
                </div>
              </div>
          )
        })
    } else {
      console.log("enteredTeams is nothing");
      return null
    }
  }

  render() {
    return (
      <div>
        league team should be rendered
        <div className="league-team">
            {this.renderEnteredTeams()}
        </div>
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
