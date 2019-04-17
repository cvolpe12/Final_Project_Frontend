import React from "react"
import Player from "../components/Player"
import PlayerForm from "../components/PlayerForm"
import { connect } from "react-redux"
import { Segment, Table } from "semantic-ui-react"

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
      <b>Click a Player to add to your team. All stats shown are their season stats.</b>
      <PlayerForm />

      <Segment inverted className="player-list">
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Team</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
              <Table.HeaderCell>Bats</Table.HeaderCell>
              <Table.HeaderCell>BAA</Table.HeaderCell>
              <Table.HeaderCell>SLG</Table.HeaderCell>
              <Table.HeaderCell>Singles</Table.HeaderCell>
              <Table.HeaderCell>Doubles</Table.HeaderCell>
              <Table.HeaderCell>Triples</Table.HeaderCell>
              <Table.HeaderCell>Home Runs</Table.HeaderCell>
              <Table.HeaderCell>RBI</Table.HeaderCell>
              <Table.HeaderCell>Runs</Table.HeaderCell>
              <Table.HeaderCell>Walks</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderPlayers()}
          </Table.Body>
        </Table>
      </Segment>
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
