import React from "react"
import { connect } from "react-redux"

class Player extends React.Component {


// if player is not on team then fetch
// else alert player on team
  playerOnTeam = () => {
    // console.log(this.props.player);
    console.log(this.props.currentTeam);
    // if the player is in the props.team then it is true
    if (this.positionFilled(this.props.player) && Object.values(this.props.team).indexOf(this.props.player) > -1){

      return true
    } else {
      return false
    }
  }

  positionFilled = () => {
    let team = this.props.team
    // debugger
    console.log("running position fillled");
    // if the player is on the roster then i should not do anything
    // if the player is not on the roster then i should check the positions
    // if the player's position is empty i should add to position
    // if the player's position is full i should check extra
    // if the extra position is empty i should add to extra
    // if the extra position is full i cannot add player
    if (Object.values(this.props.team).indexOf(this.props.player) === -1) {
      // means that player is not on the team
      switch (this.props.player.position) {
        case "C":
          if (team.catcher) {
            if (team.extra) {
              alert("Position is filled.")
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        case "1B":
          if (team.first) {
            if (team.extra) {
              alert("Position is filled.")
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        case "2B":
          if (team.second) {
            if (team.extra) {
              alert("Position is filled.")
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        case "3B":
          if (team.third) {
            if (team.extra) {
              alert("Position is filled.")
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        case "SS":
          if (team.short) {
            if (team.extra) {
              alert("Position is filled.")
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        case "OF":
          if (team.out1) {
            if (team.out2) {
              if (team.out3) {
                if (team.extra) {
                  alert("Position is filled.")
                  return true
                } else {
                  return false
                }
              } else {
                return false
              }
            } else {
              return false
            }
          } else {
            return false
          }
        case "DH":
          if (team.extra) {
              alert("Position is filled.")
              return true
            } else {
              return false
            }
        default:
          return null
      }
    } else {
      alert("Player is on your team.")
      return true
    }
  }

// creates the Draft object
  addToTeam = e => {
    console.log("running event handler");
    // debugger
    e.preventDefault()
    if (this.positionFilled() === false) {
      // console.log(this.props.currentTeam);
      // console.log(this.props.player);
      // console.log(e.target.value)
      // this.props.addPlayerToTeam(this.props.player)
      fetch('http://localhost:3000/api/v1/drafts', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "team_id": this.props.currentTeam.id,
          "player_id": this.props.player.id,
          "extra_player": false
        })
      })
      .then(res => res.json())
      .then(draft => {
        this.props.player["draftId"] = draft.id
        console.log(this.props.player);
        this.addPlayerToTeam(this.props.player)

      })
    } else {
      return null
    }
  }

  setPlayerToExtra = (player) => {
    // debugger
    console.log("extra player", player);
    fetch(`http://localhost:3000/api/v1/drafts/${player.draftId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "extra_player": true
      })
    })
    .then(res => res.json())
  }

// way to check if user has all position is filled
  addPlayerToTeam = player => {
    let team = this.props.team
    // condition ? exprT : exprF
    switch (player.position) {
      case "C":
        if (team.catcher) {
          if (team.extra) {
            return null
          } else {
            this.props.addExtra(player)
            this.setPlayerToExtra(player)
          }
        } else {
          this.props.addCatcher(player)
        }
        break;
      case "1B":
        if (team.first) {
          if (team.extra) {
            return null
          } else {
            this.props.addExtra(player)
            this.setPlayerToExtra(player)
          }
        } else {
          this.props.addFirst(player)
        }
        break;
      case "2B":
        if (team.second) {
          if (team.extra) {
            return null
          } else {
            this.props.addExtra(player)
            this.setPlayerToExtra(player)
          }
        } else {
          this.props.addSecond(player)
        }
        break;
      case "3B":
        if (team.third) {
          if (team.extra) {
            return null
          } else {
            this.props.addExtra(player)
            this.setPlayerToExtra(player)
          }
        } else {
          this.props.addThird(player)
        }
        break;
      case "SS":
        if (team.short) {
          if (team.extra) {
            return null
          } else {
            this.props.addExtra(player)
            this.setPlayerToExtra(player)
          }
        } else {
          this.props.addShort(player)
        }
        break;
      case "OF":
        if (team.out1) {
          if (team.out2) {
            if (team.out3) {
              if (team.extra) {
                return null
              } else {
                this.props.addExtra(player)
                this.setPlayerToExtra(player)
              }
            } else {
              this.props.addOF3(player)
            }
          } else {
            this.props.addOF2(player)
          }
        } else {
          this.props.addOF1(player)
        }
        break;
        case "DH":
          if (team.extra) {
            return null
          } else {
            this.props.addExtra(player)
            this.setPlayerToExtra(player)
          }
          break;
      default:
        return null
    }
  }

  render() {
    return (
      <div className="item" onClick={this.addToTeam}>
          <div className="ui content">
            <strong className="header">{this.props.player.name}</strong>
            <div className="description">
              Team: {this.props.player.team} |
              Position: {this.props.player.position} |
              Bats: {this.props.player.batting_stance} |
              BAA: {this.props.player.season_batting_avg} |
              SLG: {this.props.player.season_slugging_pct} |
              1B: {this.props.player.season_hits} |
              2B: {this.props.player.season_doubles} |
              3B: {this.props.player.season_triples} |
              HR: {this.props.player.season_home_runs} |
              RBI: {this.props.player.season_rbi} |
              Runs: {this.props.player.season_runs} |
              Walks: {this.props.player.season_walks}
        </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    currentTeam: state.currentTeam,
    team: state.team
  }
}

function mapDispatchToProps(dispatch){
  return {
    // addPlayerToTeam: (player) => {dispatch({type: "ADD_PLAYER_TO_TEAM", payload: player })}
    addCatcher: (player) => {dispatch({type: "SELECT_CATCHER", payload: player })},
    addFirst: (player) => {dispatch({type: "SELECT_FIRST", payload: player })},
    addSecond: (player) => {dispatch({type: "SELECT_SECOND", payload: player })},
    addThird: (player) => {dispatch({type: "SELECT_THIRD", payload: player })},
    addShort: (player) => {dispatch({type: "SELECT_SHORT", payload: player })},
    addOF1: (player) => {dispatch({type: "SELECT_OUTFIELD1", payload: player })},
    addOF2: (player) => {dispatch({type: "SELECT_OUTFIELD2", payload: player })},
    addOF3: (player) => {dispatch({type: "SELECT_OUTFIELD3", payload: player })},
    addExtra: (player) => {dispatch({type: "SELECT_EXTRA", payload: player })},
    addPlayerToCurrentTeam: (player) => {dispatch({type: "Add_PLAYER_CURRENT_TEAM", payload: player })}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Player)
