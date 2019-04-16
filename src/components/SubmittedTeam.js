import React from "react";

class SubmittedTeam extends React.Component {

  state = {
    teamScore: 0
  }

  renderTeamScore = () => {
    let score = 0
    this.props.team.players.map(player => {
      score += player.game_hits + (player.game_doubles * 2) + (player.game_triples * 3) + (player.game_home_runs * 4) + player.game_rbi + player.game_runs + player.game_walks
    })
    debugger
    return score
  }

  renderScore = player => {
    let score = player.game_hits + (player.game_doubles * 2) + (player.game_triples * 3) + (player.game_home_runs * 4) + player.game_rbi + player.game_runs + player.game_walks
    return score
  }

  findCatcher = (team) => {
    let player = team.players.find(player => player.position === "C" && player.extra_player === false)
    return (
      <div>
        <b>C: {player.name}</b>
        <p>Points: {this.renderScore(player)}</p>
        <p>Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}</p>
        <p></p>
      </div>
    )
  }
  findFirst = (team) => {
    let player = team.players.find(player => player.position === "1B" && player.extra_player === false)
    return (
      <div>
        <b>1B: {player.name}</b>
        <p>Points: {this.renderScore(player)}</p>
        <p>Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}</p>
        <p></p>
      </div>
    )
  }
  findSecond = (team) => {
    let player = team.players.find(player => player.position === "2B" && player.extra_player === false)
    return (
      <div>
        <b>2B: {player.name}</b>
        <p>Points: {this.renderScore(player)}</p>
        <p>Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}</p>
        <p></p>
      </div>
    )
  }
  findThird = (team) => {
    let player = team.players.find(player => player.position === "3B" && player.extra_player === false)
    return (
      <div>
        <b>3B: {player.name}</b>
        <p>Points: {this.renderScore(player)}</p>
        <p>Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}</p>
        <p></p>
      </div>
    )
  }
  findShort = (team) => {
    let player = team.players.find(player => player.position === "SS" && player.extra_player === false)
    return (
      <div>
        <b>SS: {player.name}</b>
        <p>Points: {this.renderScore(player)}</p>
        <p>Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}</p>
        <p></p>
      </div>
    )
  }
  findOutfield = (team) => {
    let outfielders = team.players.filter(player => player.position === "OF" && player.extra_player === false)
    return outfielders.map(player => {
      return (
        <div key={player.id}>
          <b>OF: {player.name}</b>
          <p>Points: {this.renderScore(player)}</p>
          <p>Hits: {player.game_hits} |
          Doubles: {player.game_doubles} |
          Triples: {player.game_triples} |
          HR: {player.game_home_runs} |
          RBI: {player.game_rbi} |
          Runs: {player.game_runs} |
          Walks: {player.game_walks}</p>
          <p></p>
        </div>
      )
    })
  }
  findExtra = (team) => {
    let player = team.players.find(player => player.extra_player === true)
    // debugger
    return (
      <div>
        <b>XH: {player.name}</b>
        <p>Points: {this.renderScore(player)}</p>
        <p>Hits: {player.game_hits} |
        Doubles: {player.game_doubles} |
        Triples: {player.game_triples} |
        HR: {player.game_home_runs} |
        RBI: {player.game_rbi} |
        Runs: {player.game_runs} |
        Walks: {player.game_walks}</p>
        <p></p>
      </div>
    )
  }


  render() {
    const {team} = this.props
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{team.user.username}</div>
          <div className="header">Score: {this.renderTeamScore()}</div>
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
  }
}
export default SubmittedTeam
