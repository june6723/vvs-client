import { CREATE_COMMENT, GET_COMMENTS, LIKE_COMMENT } from '../constants/actionTypes'

const commentReducer = (state={}, action) => {
  let updatedState = { ...state }
  switch (action.type) {
    case GET_COMMENTS:
      updatedState[action.postId] = action.comments
      return updatedState
    case CREATE_COMMENT:
      updatedState[action.data.post] = state[action.data.post].concat(action.data) 
      return updatedState 
    case LIKE_COMMENT:
      updatedState[action.data.post] = updatedState[action.data.post].map((comment) => {
        if(comment._id === action.data._id) {
          return action.data
        }
        return comment
      })
      return updatedState
    default:
      return state
  }
}

export default commentReducer