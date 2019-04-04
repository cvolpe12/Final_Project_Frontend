
const initialState = {
  players: [],
  currentlyDisplayed: []
}

function reducer(state = initialState, action){
  switch (action.type) {
    case "ADD_PLAYERS":
      return {...state, players: action.payload}
    case "SEARCH_PLAYERS":
      return {...state, currentlyDisplayed: action.payload}
    default:
      return state
  }
}

export default reducer;
