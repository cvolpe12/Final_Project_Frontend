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
    console.log(this.props.allPlayers.length);
    return this.props.allPlayers.map(player => {
      return <Player key={player.id} player={player}/>
    })
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
    allPlayers: state.allPlayers
  }
}

function mapDispatchToProps(dispatch){
  return {
    addPlayers: (players) => {dispatch({type: "GET_PLAYERS", payload: players })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
