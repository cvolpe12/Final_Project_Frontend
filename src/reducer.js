
const initialState = {
  user: "me"
}

function reducer(state = initialState, action){
  switch (action.type) {
    case "CHANGE_USER":
      return {...state, user: action.payload}
    default:
      return state
  }
}

export default reducer;
