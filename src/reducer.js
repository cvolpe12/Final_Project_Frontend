
const initialState = {
  players: []
}

function reducer(state = initialState, action){
  switch (action.type) {
    case "ADD_PLAYERS":
      return {...state, players: action.payload}
    default:
      return state
  }
}

export default reducer;
