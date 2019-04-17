import React from "react";
import { connect } from "react-redux"
import { Segment, Table } from "semantic-ui-react"


class Team extends React.Component {

  removeFromTeam = (player) => {
    // console.log(player);
    let draftId = player.draftId
    // console.log(draftId);
    fetch(`http://localhost:3000/api/v1/drafts/${draftId}`, {
      method: "DELETE"
    })
    .then(res => {
      let index = Object.values(this.props.team).indexOf(player)
      let position = Object.keys(this.props.team)[index]
      this.removeFromStoreTeam(position)
    })
  }

  renderTeamLogo = () => {
    switch (this.props.player.team) {
      case "ARI":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/50/full/gnnnrbxcmjhdgeu6mavqk3945.png"/>
      case "ATL":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/51/full/7150_atlanta_braves-primary-2018.png"/>
      case "BAL":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/52/full/5800_baltimore_orioles-primary-2019.png"/>
      case "BOS":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/53/full/c0whfsa9j0vbs079opk2s05lx.png"/>
      case "CHC":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/54/full/q9gvs07u72gc9xr3395u6jh68.png"/>
      case "CWS":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/55/full/oxvkprv7v4inf5dgqdebp0yse.png"/>
      case "CIN":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/56/full/z9e0rqit393ojiizsemd0t1hx.png"/>
      case "CLE":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/57/full/5347_cleveland_indians-primary-2014.png"/>
      case "COL":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/58/full/6871_colorado_rockies-primary-2017.png"/>
      case "DET":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/59/full/8964_detroit_tigers-primary-2016.png"/>
      case "HOU":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/4929/full/9503_houston_astros-primary-2000.png"/>
      case "KC":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/62/full/8322_kansas_city_royals-primary-2019.png"/>
      case "LAA":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/6521/full/4389_los_angeles_angels-primary-2016.png"/>
      case "LAD":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/63/full/efvfv5b5g1zgpsf56gb04lthx.png"/>
      case "MIA":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/3637/full/7544_miami_marlins-primary-2019.png"/>
      case "MIL":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/64/full/7997_milwaukee_brewers-primary-2018.png"/>
      case "MIN":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/65/full/peii986yf4l42v3aa3hy0ovlf.png"/>
      case "NYM":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/67/full/m01gfgeorgvbfw15fy04alujm.png"/>
      case "NYY":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/68/full/1256.png"/>
      case "OAK":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/69/full/6xk2lpc36146pbg2kydf13e50.png"/>
      case "PHI":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/70/full/7579_philadelphia_phillies-primary-2019.png"/>
      case "PIT":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/71/full/1250_pittsburgh_pirates-primary-2014.png"/>
      case "SD":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/73/full/4344_san_diego_padres-primary-2015.png"/>
      case "SF":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/74/full/cpqj6up5bvgpoedg5fwsk20ve.png"/>
      case "SEA":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/75/full/1305.png"/>
      case "STL":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/72/full/3zhma0aeq17tktge1huh7yok5.png"/>
      case "TB":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/2535/full/9448_tampa_bay_rays-primary-2019.png"/>
      case "TEX":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/77/full/ajfeh4oqeealq37er15r3673h.png"/>
      case "TOR":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/53/78/full/2559d7603ouedg7ldhw0br4fn.png"/>
      case "WAS":
        return <img className="ui mini image" src="http://content.sportslogos.net/logos/54/578/full/rcehah9k0kekjkgzm077fflws.png"/>
      default:
        return this.props.team
    }
  }

  removeFromStoreTeam = (position) => {
    switch (position) {
      case "catcher":
      this.props.removeCatcher()
        break;
      case "first":
      this.props.removeFirst()
        break;
      case "second":
      this.props.removeSecond()
        break;
      case "third":
      this.props.removeThird()
        break;
      case "short":
      this.props.removeShort()
        break;
      case "out1":
      this.props.removeOF1()
          break;
      case "out2":
      this.props.removeOF2()
          break;
      case "out3":
      this.props.removeOF3()
          break;
      case "extra":
      this.props.removeExtra()
          break;
      default:
        return null
    }
  }

  renderPlayerInfo = player => {
    if (player) {
      // debugger
      // console.log(this.props.team);
      return (
        <Segment>
          <Table.Cell>{this.props.player.name}</Table.Cell>
          <Table.Cell>{this.renderTeamLogo()}</Table.Cell>
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
        </Segment>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <Segment>
        <Table.Row>
          <Table.Cell>Catcher</Table.Cell>
          {this.renderPlayerInfo(this.props.team.catcher)}
        </Table.Row>
        <Table.Row>
          <Table.Cell>First Base</Table.Cell>
          {this.renderPlayerInfo(this.props.team.first)}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Second Base</Table.Cell>
          {this.renderPlayerInfo(this.props.team.second)}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Third Base</Table.Cell>
          {this.renderPlayerInfo(this.props.team.third)}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Short Stop</Table.Cell>
          {this.renderPlayerInfo(this.props.team.short)}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Outfield</Table.Cell>
          {this.renderPlayerInfo(this.props.team.out1)}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Outfield</Table.Cell>
          {this.renderPlayerInfo(this.props.team.out2)}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Outfield</Table.Cell>
          {this.renderPlayerInfo(this.props.team.out3)}
        </Table.Row>
        <Table.Row>
          <Table.Cell>XH</Table.Cell>
          {this.renderPlayerInfo(this.props.team.extra)}
        </Table.Row>
      </Segment>
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
    // addPlayerToTeam: (player) => {dispatch({type: "ADD_PLAYER_TO_TEAM", payload: player })}
    removeCatcher: () => {dispatch({type: "REMOVE_CATCHER" })},
    removeFirst: () => {dispatch({type: "REMOVE_FIRST" })},
    removeSecond: () => {dispatch({type: "REMOVE_SECOND" })},
    removeThird: () => {dispatch({type: "REMOVE_THIRD" })},
    removeShort: () => {dispatch({type: "REMOVE_SHORT" })},
    removeOF1: () => {dispatch({type: "REMOVE_OUTFIELD1" })},
    removeOF2: () => {dispatch({type: "REMOVE_OUTFIELD2" })},
    removeOF3: () => {dispatch({type: "REMOVE_OUTFIELD3" })},
    removeExtra: () => {dispatch({type: "REMOVE_EXTRA" })}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Team)

// <div className="ui list inverted">
//   <div className="item" >
//     <b className="icon">C:</b>
//       {this.renderPlayerInfo(this.props.team.catcher)}
//   </div>
//   <div className="item" >
//     <b className="icon">1B:</b>
//       {this.renderPlayerInfo(this.props.team.first)}
//   </div>
//   <div className="item" >
//     <b className="icon">2B:</b>
//       {this.renderPlayerInfo(this.props.team.second)}
//   </div>
//   <div className="item" >
//     <b className="icon">3B:</b>
//       {this.renderPlayerInfo(this.props.team.third)}
//   </div>
//   <div className="item" >
//     <b className="icon">SS:</b>
//       {this.renderPlayerInfo(this.props.team.short)}
//   </div>
//   <div className="item" >
//     <b className="icon">OF:</b>
//       {this.renderPlayerInfo(this.props.team.out1)}
//   </div>
//   <div className="item" >
//     <b className="icon">OF:</b>
//       {this.renderPlayerInfo(this.props.team.out2)}
//   </div>
//   <div className="item" >
//     <b className="icon">OF:</b>
//       {this.renderPlayerInfo(this.props.team.out3)}
//   </div>
//   <div className="item" >
//     <b className="icon">XH:</b>
//       {this.renderPlayerInfo(this.props.team.extra)}
//   </div>
// </div>
