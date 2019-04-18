import React from "react";
import Suggestion from '../components/Suggestion'
import { Card } from 'semantic-ui-react'
import { connect } from "react-redux"

class LeagueSuggestions extends React.Component {

  shuffleLeagues = () => {
    let array = this.props.allLeagues
    let i = array.length - 1
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
    // this.setState({
    //   suggested: array
    // })
  }

  renderSuggestions = () => {
    // need to map
    let filteredLeagues = this.shuffleLeagues().filter(league => {
      if (league.teams.user_id !== parseInt(this.props.currentUser.id)) {
        return league
      }
    })
    // console.log(this.props.allLeagues);
    // console.log(filteredLeagues);
    return filteredLeagues.slice(0,4).map(league => {
        return <Suggestion key={league.id} league={league}/>
      }
    )
  }

  render() {
    return (
      <div className="suggestion-container">
        <h3>Suggestions</h3>
        <Card.Group>
          {this.renderSuggestions()}
        </Card.Group>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    allLeagues: state.allLeagues,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(LeagueSuggestions)
