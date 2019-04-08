import React from "react";
import { connect } from "react-redux"

class LeagueInformation extends React.Component {

  componentDidMount(){
    // need to change fetch to match league id -- hardcoded right now
    fetch("http://localhost:3000/api/v1/leagues/1")
      .then(res=>res.json())
      .then(league => {
        console.log(league);
        this.props.setLeague(league)
      })
  }

  render() {
    return (
      <div>
        <h2>{this.props.league.name}</h2>
        <p>{this.props.league.participants}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeagueInformation)
