
const initialState = {
  allPlayers: [],
  currentlyDisplayed: [],
  currentTeam: "",
  team: {
    catcher: "",
    first: "",
    second: "",
    third: "",
    short: "",
    out1: "",
    out2: "",
    out3: "",
    extra: ""
  },
  league: "",
  currentUser: ""
}

function reducer(state = initialState, action){
  switch (action.type) {
    case "GET_PLAYERS":
      return {...state, allPlayers: action.payload}
    case "SEARCH_PLAYERS":
      return {...state, currentlyDisplayed: action.payload}
    case "FILTER_POSITIONS":
      return {...state, currentlyDisplayed: action.payload}
    case "SET_LEAGUE":
      return {...state, league: action.payload}
    case "SET_CURRENT_USER":
      return {...state, currentUser: action.payload}
    case "SET_CURRENT_TEAM":
      return {...state, currentTeam: action.payload}
    case "SELECT_CATCHER":
      return {...state, team: {...state.team, catcher: action.payload}}
    case "SELECT_FIRST":
      return {...state, team: {...state.team, first: action.payload}}
    case "SELECT_SECOND":
      return {...state, team: {...state.team, second: action.payload}}
    case "SELECT_THIRD":
      return {...state, team: {...state.team, third: action.payload}}
    case "SELECT_SHORT":
      return {...state, team: {...state.team, short: action.payload}}
    case "SELECT_OUTFIELD1":
      return {...state, team: {...state.team, out1: action.payload}}
    case "SELECT_OUTFIELD2":
      return {...state, team: {...state.team, out2: action.payload}}
    case "SELECT_OUTFIELD3":
      return {...state, team: {...state.team, out3: action.payload}}
    case "SELECT_EXTRA":
      return {...state, team: {...state.team, extra: action.payload}}
    case "REMOVE_CATCHER":
      return {...state, team: {...state.team, catcher: ""}}
    case "REMOVE_FIRST":
      return {...state, team: {...state.team, first: ""}}
    case "REMOVE_SECOND":
      return {...state, team: {...state.team, second: ""}}
    case "REMOVE_THIRD":
      return {...state, team: {...state.team, third: ""}}
    case "REMOVE_SHORT":
      return {...state, team: {...state.team, short: ""}}
    case "REMOVE_OUTFIELD1":
      return {...state, team: {...state.team, out1: ""}}
    case "REMOVE_OUTFIELD2":
      return {...state, team: {...state.team, out2: ""}}
    case "REMOVE_OUTFIELD3":
      return {...state, team: {...state.team, out3: ""}}
    case "REMOVE_EXTRA":
      return {...state, team: {...state.team, extra: ""}}

    case "LOGOUT":
      return {...state, currentUser: ""}
    default:
      return state
  }
}

export default reducer;
