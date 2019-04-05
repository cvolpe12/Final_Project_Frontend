import React from "react";
import { connect } from "react-redux"

class PlayerForm extends React.Component {

  searchPlayers = e => {
    e.preventDefault()
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search..." name="search" onChange={this.searchPlayers}/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    players: state.players
  }
}

function mapDispatchToProps(dispatch){
  return {
    addPlayers: (players) => {dispatch({type: "ADD_PLAYERS", payload: players })}
  }
}
// connect(mapStateToProps, mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm)
