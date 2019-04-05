import React from "react"
import { connect } from "react-redux"

class Player extends React.Component {

  // const playerName = () => {
  //   return `${this.props.player.first_name} ` + `${this.props.player.last_name}`
  // }

  addToTeam = e => {
    e.preventDefault()
    console.log(this.props.player);
    // console.log(e.target.value)
    // this.props.addPlayerToTeam(this.props.player)
    fetch('http://localhost:3000/api/v1/drafts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "team_id": 1,
        "player_id": this.props.player.id
      })
    })
    .then(res => res.json())
    this.props.addPlayerToTeam(this.props.player)
  }

  render() {
    return (
      <div className="item" onClick={this.addToTeam}>
          <div className="ui content">
            <strong className="header">{this.props.player.first_name} {this.props.player.last_name}</strong>
            <div className="description">
              Team: {this.props.player.team} |
              Position: {this.props.player.position} |
              Bats: {this.props.player.batting_stance} |
              BAA: {this.props.player.season_batting_avg} |
              SLG: {this.props.player.season_slugging_pct} |
              1B: {this.props.player.season_hits} |
              2B: {this.props.player.season_doubles} |
              3B: {this.props.player.season_triples} |
              HR: {this.props.player.season_home_runs} |
              RBI: {this.props.player.season_rbi} |
              Runs: {this.props.player.season_runs} |
              Walks: {this.props.player.season_walks}
        </div>
      </div>
    </div>
    )
  }
}



function mapDispatchToProps(dispatch){
  return {
    addPlayerToTeam: (player) => {dispatch({type: "ADD_PLAYER_TO_TEAM", payload: player })}
  }
}


export default connect(null, mapDispatchToProps)(Player)
