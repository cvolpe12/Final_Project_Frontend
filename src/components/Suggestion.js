import React, { Fragment } from "react"
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'


const Suggestion = (props) => {

  const formatDate = (league) => {
    let date = league.date_of_games.split("")
    let year = date[0]+date[1]+date[2]+date[3]
    let month = date[4] + date[5]
    let day = date[6] + date[7]
    return month+'-'+day+'-'+year
    // this.setState({date: month+'-'+day+'-'+year})
  }

  return (
    <Fragment>
        <Link to={`/leagues/${props.league.id}`}>
          <Card className="suggestion-card">
            <Card.Content>
              <Card.Header>{props.league.name}</Card.Header>
              <Card.Description>Participants: {props.league.teams.length}/{props.league.participants}</Card.Description>
              <Card.Description>Date: {formatDate(props.league)}</Card.Description>
            </Card.Content>
          </Card>
        </Link>
    </Fragment>

  )
}

export default Suggestion
