import React from "react"
import { connect } from "react-redux"
import { Table } from "semantic-ui-react"

class Player extends React.Component {


// if player is not on team then fetch
// else alert player on team
  playerOnTeam = () => {
    // console.log(this.props.player);
    // console.log(this.props.currentTeam);
    // if the player is in the props.team then it is true
    if (this.positionFilled(this.props.player) && Object.values(this.props.team).indexOf(this.props.player) > -1){

      return true
    } else {
      return false
    }
  }

  positionFilled = () => {
    let team = this.props.team
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
    // console.log("running event handler");
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

// will use this to render logo for each player
  renderTeamLogo = () => {
    switch (this.props.player.team) {
      case "ARI":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/50/full/gnnnrbxcmjhdgeu6mavqk3945.png" alt={this.props.player.team}/>
      case "ATL":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/51/full/7150_atlanta_braves-primary-2018.png" alt={this.props.player.team}/>
      case "BAL":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/52/full/5800_baltimore_orioles-primary-2019.png" alt={this.props.player.team}/>
      case "BOS":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/53/full/c0whfsa9j0vbs079opk2s05lx.png" alt={this.props.player.team}/>
      case "CHC":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/54/full/q9gvs07u72gc9xr3395u6jh68.png" alt={this.props.player.team}/>
      case "CWS":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/55/full/oxvkprv7v4inf5dgqdebp0yse.png" alt={this.props.player.team}/>
      case "CIN":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/56/full/z9e0rqit393ojiizsemd0t1hx.png" alt={this.props.player.team}/>
      case "CLE":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/57/full/5347_cleveland_indians-primary-2014.png" alt={this.props.player.team}/>
      case "COL":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/58/full/6871_colorado_rockies-primary-2017.png" alt={this.props.player.team}/>
      case "DET":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/59/full/8964_detroit_tigers-primary-2016.png" alt={this.props.player.team}/>
      case "HOU":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/4929/full/9503_houston_astros-primary-2000.png" alt={this.props.player.team}/>
      case "KC":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/62/full/8322_kansas_city_royals-primary-2019.png" alt={this.props.player.team}/>
      case "LAA":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/6521/full/4389_los_angeles_angels-primary-2016.png" alt={this.props.player.team}/>
      case "LAD":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/63/full/efvfv5b5g1zgpsf56gb04lthx.png" alt={this.props.player.team}/>
      case "MIA":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/3637/full/7544_miami_marlins-primary-2019.png" alt={this.props.player.team}/>
      case "MIL":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/64/full/7997_milwaukee_brewers-primary-2018.png" alt={this.props.player.team}/>
      case "MIN":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/65/full/peii986yf4l42v3aa3hy0ovlf.png" alt={this.props.player.team}/>
      case "NYM":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/67/full/m01gfgeorgvbfw15fy04alujm.png" alt={this.props.player.team}/>
      case "NYY":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/68/full/1256.png" alt={this.props.player.team}/>
      case "OAK":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/69/full/6xk2lpc36146pbg2kydf13e50.png" alt={this.props.player.team}/>
      case "PHI":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/70/full/7579_philadelphia_phillies-primary-2019.png" alt={this.props.player.team}/>
      case "PIT":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/71/full/1250_pittsburgh_pirates-primary-2014.png" alt={this.props.player.team}/>
      case "SD":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/73/full/4344_san_diego_padres-primary-2015.png" alt={this.props.player.team}/>
      case "SF":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/74/full/cpqj6up5bvgpoedg5fwsk20ve.png" alt={this.props.player.team}/>
      case "SEA":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/75/full/1305.png" alt={this.props.player.team}/>
      case "STL":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/72/full/3zhma0aeq17tktge1huh7yok5.png" alt={this.props.player.team}/>
      case "TB":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/2535/full/9448_tampa_bay_rays-primary-2019.png" alt={this.props.player.team}/>
      case "TEX":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/77/full/ajfeh4oqeealq37er15r3673h.png" alt={this.props.player.team}/>
      case "TOR":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/78/full/2559d7603ouedg7ldhw0br4fn.png" alt={this.props.player.team}/>
      case "WAS":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/578/full/rcehah9k0kekjkgzm077fflws.png" alt={this.props.player.team}/>
      default:
        return this.props.player.team
    }
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
    if (this.props.player) {
      return (
        <Table.Row onClick={this.addToTeam} style={{cursor:"pointer"}}>
          <Table.Cell>{this.props.player.name}</Table.Cell>
          <Table.Cell>{this.renderTeamLogo()}</Table.Cell>
          <Table.Cell>{this.props.player.position}</Table.Cell>
          <Table.Cell>{this.props.player.batting_stance}</Table.Cell>
          <Table.Cell>{this.props.player.season_batting_avg}</Table.Cell>
          <Table.Cell>{this.props.player.season_slugging_pct}</Table.Cell>
          <Table.Cell>{this.props.player.season_hits}</Table.Cell>
          <Table.Cell>{this.props.player.season_doubles}</Table.Cell>
          <Table.Cell>{this.props.player.season_triples}</Table.Cell>
          <Table.Cell>{this.props.player.season_home_runs}</Table.Cell>
          <Table.Cell>{this.props.player.season_rbi}</Table.Cell>
          <Table.Cell>{this.props.player.season_runs}</Table.Cell>
          <Table.Cell>{this.props.player.season_walks}</Table.Cell>
        </Table.Row>
      )
    } else {
      return null
    }
  }
}

// <div className="item" onClick={this.addToTeam}>
//     <div className="ui content">
//       <strong className="header">{this.props.player.name}</strong>
//       <div className="description">
//         Team: {this.props.player.team} |
//         Position: {this.props.player.position} |
//         Bats: {this.props.player.batting_stance} |
//         BAA: {this.props.player.season_batting_avg} |
//         SLG: {this.props.player.season_slugging_pct} |
//         1B: {this.props.player.season_hits} |
//         2B: {this.props.player.season_doubles} |
//         3B: {this.props.player.season_triples} |
//         HR: {this.props.player.season_home_runs} |
//         RBI: {this.props.player.season_rbi} |
//         Runs: {this.props.player.season_runs} |
//         Walks: {this.props.player.season_walks}
//   </div>
// </div>
// </div>

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
  //   addCatcher: (player) => {dispatch({type: "SELECT_CATCHER", payload: player })},
  //   addFirst: (player) => {dispatch({type: "SELECT_FIRST", payload: player })},
  //   addSecond: (player) => {dispatch({type: "SELECT_SECOND", payload: player })},
  //   addThird: (player) => {dispatch({type: "SELECT_THIRD", payload: player })},
  //   addShort: (player) => {dispatch({type: "SELECT_SHORT", payload: player })},
  //   addOF1: (player) => {dispatch({type: "SELECT_OUTFIELD1", payload: player })},
  //   addOF2: (player) => {dispatch({type: "SELECT_OUTFIELD2", payload: player })},
  //   addOF3: (player) => {dispatch({type: "SELECT_OUTFIELD3", payload: player })},
  //   addExtra: (player) => {dispatch({type: "SELECT_EXTRA", payload: player })},
  //   addPlayerToCurrentTeam: (player) => {dispatch({type: "Add_PLAYER_CURRENT_TEAM", payload: player })}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Player)
