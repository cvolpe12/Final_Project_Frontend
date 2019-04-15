import React from "react";
import { connect } from "react-redux"

class Team extends React.Component {

  removeFromTeam = (player) => {
    // console.log(player);
    let draftId = player.draftId
    // console.log(draftId);
    fetch(`http://localhost:3000/api/v1/drafts/${draftId}`, {
      method: "DELETE"
    })
    .then(res => {
      let index = Object.values(this.props.team).indexOf(player)
      let position = Object.keys(this.props.team)[index]
      this.removeFromStoreTeam(position)
    })
  }

  removeFromStoreTeam = (position) => {
    switch (position) {
      case "catcher":
      this.props.removeCatcher()
        break;
      case "first":
      this.props.removeFirst()
        break;
      case "second":
      this.props.removeSecond()
        break;
      case "third":
      this.props.removeThird()
        break;
      case "short":
      this.props.removeShort()
        break;
      case "out1":
      this.props.removeOF1()
          break;
      case "out2":
      this.props.removeOF2()
          break;
      case "out3":
      this.props.removeOF3()
          break;
      case "extra":
      this.props.removeExtra()
          break;
      default:
        return null
    }
  }

  renderPlayerInfo = player => {
    if (player) {
      // debugger
      // console.log(this.props.team);
      return (
        <div className="ui content" onClick={() => this.removeFromTeam(player)}>
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

function mapDispatchToProps(dispatch){
  return {
    // addPlayerToTeam: (player) => {dispatch({type: "ADD_PLAYER_TO_TEAM", payload: player })}
    removeCatcher: () => {dispatch({type: "REMOVE_CATCHER" })},
    removeFirst: () => {dispatch({type: "REMOVE_FIRST" })},
    removeSecond: () => {dispatch({type: "REMOVE_SECOND" })},
    removeThird: () => {dispatch({type: "REMOVE_THIRD" })},
    removeShort: () => {dispatch({type: "REMOVE_SHORT" })},
    removeOF1: () => {dispatch({type: "REMOVE_OUTFIELD1" })},
    removeOF2: () => {dispatch({type: "REMOVE_OUTFIELD2" })},
    removeOF3: () => {dispatch({type: "REMOVE_OUTFIELD3" })},
    removeExtra: () => {dispatch({type: "REMOVE_EXTRA" })}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Team)
