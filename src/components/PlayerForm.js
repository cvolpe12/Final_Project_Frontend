import React from "react";
import { connect } from "react-redux"

class PlayerForm extends React.Component {

  searchPlayers = e => {
    e.preventDefault()
    console.log(e.target.value);
    let filterNames = this.props.allPlayers.filter(player => player.name.toLowerCase().includes(e.target.value.toLowerCase()))
    let filterTeams = this.props.allPlayers.filter(player => player.team.toLowerCase().includes(e.target.value.toLowerCase()))
    let filterPlayers = filterNames.concat(filterTeams)
    let uniqFilter = [...new Set(filterPlayers)]
    // console.log("first", filterFirstNames);
    // console.log("last", filterLastNames);
    // console.log("team", filterTeams);
    // console.log(filterPlayers);
    // console.log("uniq", uniqFilter);
    this.props.filterPlayers(uniqFilter)
  }

  filterPlayerPosition = e => {
    e.preventDefault()
    console.log(e.target.value);
    console.log(this.props);
    // debugger
    if (e.target.value !== "All") {
      let filterPlayers = this.props.allPlayers.filter(player => player.position === e.target.value)
      this.props.filterPlayers(filterPlayers)
    } else {
      this.props.filterPlayers(this.props.allPlayers)
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search..." name="search" onChange={this.searchPlayers}/>
        </form>
        <label>
          Position:
          <select onChange={this.filterPlayerPosition}>
            <option value="All">All</option>
            <option value="C">C</option>
            <option value="1B">1B</option>
            <option value="2B">2B</option>
            <option value="3B">3B</option>
            <option value="SS">SS</option>
            <option value="OF">OF</option>
            <option value="DH">DH</option>
          </select>
        </label>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    allPlayers: state.allPlayers,
    currentlyDisplayed: state.currentlyDisplayed
  }
}

function mapDispatchToProps(dispatch){
  return {
    filterPlayers: (players) => {dispatch({type: "FILTER_POSITIONS", payload: players })}
  }
}
// connect(mapStateToProps, mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm)
