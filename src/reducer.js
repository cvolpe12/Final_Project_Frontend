
const initialState = {
  allPlayers: [],
  currentlyDisplayed: [],
  team: [],
  league: "",
  currentUser: ""
}

function reducer(state = initialState, action){
  switch (action.type) {
    case "GET_PLAYERS":
      return {...state, allPlayers: action.payload}
    case "ADD_PLAYER_TO_TEAM":
      return {...state, team: [...state.team, action.payload]}
    case "SEARCH_PLAYERS":
      return {...state, currentlyDisplayed: action.payload}
    case "FILTER_POSITIONS":
      return {...state, currentlyDisplayed: action.payload}
    case "SET_LEAGUE":
      return {...state, league: action.payload}
    case "SET_CURRENT_USER":
      return {...state, currentUser: action.payload}
    default:
      return state
  }
}

export default reducer;
