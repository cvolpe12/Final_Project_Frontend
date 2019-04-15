import React, { Fragment } from "react"
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'


const Suggestion = (props) => {
  return (
    <Fragment>
        <Link to={`/leagues/${props.league.id}`}>
          <Card className="suggestion-card">
            <Card.Content>
              <Card.Header>{props.league.name}</Card.Header>
              <Card.Description>Participants: {props.league.teams.length}/{props.league.participants}</Card.Description>
            </Card.Content>
          </Card>
        </Link>
    </Fragment>

  )
}

export default Suggestion
