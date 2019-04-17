import React from "react"
import { connect } from "react-redux"
import Team from "../components/Team"
import { Segment, Table } from "semantic-ui-react"


class TeamContainer extends React.Component {

  componentDidMount() {
    // need to use team id for this part - currently hardcoding 1
    fetch("http://localhost:3000/api/v1/teams/1")
      .then(res => res.json())
      .then(team => {
        // console.log(team.players);
        return team.players.map(player => {
          return this.props.addPlayerToTeam(player)
        })
      })
  }

  renderTeam = () => {
    console.log(this.props.team);
    debugger
    return this.props.team.map(player => {
      return <Team key={player.id} player={player}/>
    })
  }

  render() {
    // console.log(this.props)
    return (
    <div className="team-container">
    Your Team
    <br/>
    <br/>
    <Segment inverted className="player-list">
      <Table definition celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Team</Table.HeaderCell>
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
          {this.renderTeam()}
        </Table.Body>
      </Table>
    </Segment>
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
    addPlayerToTeam: (player) => {dispatch({type: "ADD_PLAYER_TO_TEAM", payload: player })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer)
