


const initialState = {  
  filter: '',
  heroes: []
}

const reducer = (state = initialState, action) => {  
  switch (action.type) {
    case 'GET_HEROES':
      return Object.assign({}, state, {
        heroes: action.data
      })
    default:
      return state
  }
}

export default reducer;