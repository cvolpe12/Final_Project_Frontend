import React from "react";
import { connect } from "react-redux"

class LeagueInformation extends React.Component {

  state = {
    date: ""
  }

  componentDidMount(){
    console.log(this.props);
    // debugger
    // need to change fetch to match league id -- hardcoded right now
    let id = this.props.match.params.id
    fetch(`http://localhost:3000/api/v1/leagues/${id}`)
      .then(res=>res.json())
      .then(league => {
        // debugger
        this.props.setLeague(league)
        this.formatDate()
      })
  }

  formatDate = () => {
    let date = this.props.league.date_of_games.split("")
    let year = date[0]+date[1]+date[2]+date[3]
    let month = date[4] + date[5]
    let day = date[6] + date[7]
    this.setState({date: month+'-'+day+'-'+year})
  }

  render() {
    return (
      <div>
        <h2>{this.props.league.name}</h2>
        <p>Max Participants: {this.props.league.participants}</p>
        <p>Limit: 60000</p>
        <p>Date of Games: {this.state.date}</p>
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
