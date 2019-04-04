import React from "react"

const Player = (props) => {

  // const playerName = () => {
  //   return `${props.player.first_name} ` + `${props.player.last_name}`
  // }

  return (
    <div className="item">
        <div className="ui content">
          <a className="header">{props.player.first_name} {props.player.last_name}</a>
          <div className="description">
            Team: {props.player.team} |
            Position: {props.player.position} |
            Bats: {props.player.batting_stance} |
            BAA: {props.player.season_batting_avg} |
            SLG: {props.player.season_slugging_pct} |
            1B: {props.player.season_hits} |
            2B: {props.player.season_doubles} |
            3B: {props.player.season_triples} |
            HR: {props.player.season_home_runs} |
            RBI: {props.player.season_rbi} |
            Runs: {props.player.season_runs} |
            Walks: {props.player.season_walks}
      </div>
    </div>
  </div>
  )
}

export default Player
