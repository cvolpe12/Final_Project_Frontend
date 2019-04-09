import React from "react";

class CreateLeagueForm extends React.Component {

  state = {
    name: "",
    dateOfGames: "",
    participants: "",
    playerLeague: "MLB"
  }

  handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

  handleOptionChange = e => {
    this.setState({
      playerLeague: e.target.value
    })
  }

  handleSubmit = e => {
    console.log(this.state);
    let gameDate = this.state.dateOfGames.split("-").join("")
    console.log("gameDate", gameDate);
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/leagues", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify({
        name: this.state.name,
        participants: this.state.participants,
        limit: 60000,
        player_source: this.state.playerLeague,
        date_of_games: gameDate
      })
		})
		.then(res => res.json())
    .then(league => {
      console.log(league);
      debugger
      this.props.history.push(`/leagues/${league.id}`)
    })
  }


  pointerStyle = {
    pointerEvents: 'all'
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="equal width fields">
            <div className="field">
              <label>League name</label>
              <div className="ui input">
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="League name"/>
              </div>
            </div>
            <div className="field">
              <label>Date of Games</label>
              <div className="ui input">
                <input type="text" name="dateOfGames" value={this.state.dateOfGames} onChange={this.handleChange} placeholder="YYYY-MM-DD"/>
              </div>
            </div>
            <div className="field">
              <label>Number of Participants</label>
              <div className="ui input">
                <input type="text" name="participants" value={this.state.participants} onChange={this.handleChange} placeholder="Enter Number ≥ 2"/>
              </div>
            </div>
          </div>
          <div className="inline fields" >
            <label>Player League</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="leagueSource" checked={this.state.playerLeague === "MLB"} value="MLB" tabIndex="0" onChange={this.handleOptionChange}/>
                <label>MLB</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="leagueSource" checked={this.state.playerLeague === "NL"} value="NL" tabIndex="0" onChange={this.handleOptionChange}/>
                <label>NL</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="leagueSource" checked={this.state.playerLeague === "AL"} value="AL" tabIndex="0" onChange={this.handleOptionChange}/>
                <label>AL</label>
              </div>
            </div>
          </div>
          <div className="field">
            <button className="ui button">Submit</button>
          </div>
        </form>

      </div>
    )
  }
}
export default CreateLeagueForm
