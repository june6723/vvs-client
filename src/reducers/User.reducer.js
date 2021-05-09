import { FIND_USER } from '../constants/actionTypes'

const initialState = {
  
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FIND_USER:
      return { ...state, }
    default:
      return state
  }
}

export default userReducer