import React from "react";

class Team extends React.Component {

  render() {
    return (
      <div className="item" >
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
export default Team
