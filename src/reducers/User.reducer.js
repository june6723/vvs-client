import { FIND_ME, FIND_USER, UPLOAD_PROFILE_IMG } from '../constants/actionTypes'

const initialState = {
  profile:{},
  myProfile:{}
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FIND_USER:
      return { ...state, profile: action.data }
    case FIND_ME:
      return { ...state, me: action.data }
    case UPLOAD_PROFILE_IMG:
      return { ...state, me: action.data}
    default:
      return state
  }
}

export default userReducer