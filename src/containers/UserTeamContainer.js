import React from "react"
import { connect } from "react-redux"

const UserTeamContainer = (props) => {


  console.log(props)
  return (
  <div className="">
  user team
  </div>
  )
}

function mapStateToProps(state){
  return {
    team: state.team
  }
}

export default connect(mapStateToProps)(UserTeamContainer)
