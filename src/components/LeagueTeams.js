import React from "react";
import { connect } from "react-redux"

class LeagueTeams extends React.Component {



  render() {
    return (
      <div>
        league team should be rendered
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    league: state.league
  }
}

export default connect(mapStateToProps)(LeagueTeams)

// <div class="ui card">
//   <div class="content">
//     <div class="header">Cute Dog</div>
//     <div class="meta">2 days ago</div>
//     <div class="description">
//       <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
//       <p>Many people also have their own barometers for what makes a cute dog.</p>
//     </div>
//   </div>
// </div>
