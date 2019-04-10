import React from "react";
import { connect } from "react-redux"

class Team extends React.Component {

  renderPlayerInfo = player => {
    if (player) {
      // debugger
      // console.log(this.props.team);
      return (
        <div className="ui content">
          <strong className="header">{player.name}</strong>
          <div className="description">
            Team: {player.team} |
            Position: {player.position} |
            Bats: {player.batting_stance} |
            BAA: {player.season_batting_avg} |
            SLG: {player.season_slugging_pct} |
            1B: {player.season_hits} |
            2B: {player.season_doubles} |
            3B: {player.season_triples} |
            HR: {player.season_home_runs} |
            RBI: {player.season_rbi} |
            Runs: {player.season_runs} |
            Walks: {player.season_walks}
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="ui list">
        <div className="item" >
          <b className="icon">C:</b>
            {this.renderPlayerInfo(this.props.team.catcher)}
        </div>
        <div className="item" >
          <b className="icon">1B:</b>
            {this.renderPlayerInfo(this.props.team.first)}
        </div>
        <div className="item" >
          <b className="icon">2B:</b>
            {this.renderPlayerInfo(this.props.team.second)}
        </div>
        <div className="item" >
          <b className="icon">3B:</b>
            {this.renderPlayerInfo(this.props.team.third)}
        </div>
        <div className="item" >
          <b className="icon">SS:</b>
            {this.renderPlayerInfo(this.props.team.short)}
        </div>
        <div className="item" >
          <b className="icon">OF:</b>
            {this.renderPlayerInfo(this.props.team.out1)}
        </div>
        <div className="item" >
          <b className="icon">OF:</b>
            {this.renderPlayerInfo(this.props.team.out2)}
        </div>
        <div className="item" >
          <b className="icon">OF:</b>
            {this.renderPlayerInfo(this.props.team.out3)}
        </div>
        <div className="item" >
          <b className="icon">XH:</b>
            {this.renderPlayerInfo(this.props.team.extra)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    team: state.team
  }
}

export default connect(mapStateToProps)(Team)
