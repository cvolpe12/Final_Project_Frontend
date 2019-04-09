import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { Card } from 'semantic-ui-react'

class UserLeagues extends React.Component {

    renderTeams = () => {
      console.log(this.props.currentUser);
      debugger
      if (!!this.props.currentUser) {
        return this.props.currentUser.leagues.map(league => {
          return (
            <Link to={`/leagues/${league.id}`}>
            <Card className="">
            <Card.Content>
            <Card.Header>{league.name}</Card.Header>
            </Card.Content>
            </Card>
            </Link>
          )
        })
      } else {
        return null
      }
    }

  render() {
    return (
      <Card.Group>
        {this.renderTeams()}
      </Card.Group>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(UserLeagues)
