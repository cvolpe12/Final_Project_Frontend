import React from "react"
import Player from "../components/Player"
import PlayerForm from "../components/PlayerForm"
import { connect } from "react-redux"

class PlayerContainer extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/players")
      .then(res => res.json())
      .then(players => {
        this.props.addPlayers(players)
      })
  }

  renderPlayers = () => {
    // console.log(this.props);
    if (this.props.currentlyDisplayed.length > 0) {
      return this.props.currentlyDisplayed.map(player => {
        return <Player key={player.id} player={player}/>
      })
    }
    else {
      // alert("No players found by your query")
      return this.props.allPlayers.map(player => {
        return <Player key={player.id} player={player}/>
      })
    }
  }

  render() {
    return (
    <div className="player-container">
      Player Container
      <PlayerForm />
      <div className="player-list">
        {this.renderPlayers()}
      </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    allPlayers: state.allPlayers,
    currentlyDisplayed: state.currentlyDisplayed
  }
}

function mapDispatchToProps(dispatch){
  return {
    addPlayers: (players) => {dispatch({type: "GET_PLAYERS", payload: players })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
