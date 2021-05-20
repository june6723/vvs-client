import { CREATE_REPLY, GET_REPLIES } from '../constants/actionTypes'

const replyReducer = (state={}, action) => {
  let updatedState = state
  switch (action.type) {
    case GET_REPLIES:
      updatedState[action.commentId] = action.data
      return updatedState
    case CREATE_REPLY:
      updatedState[action.commentId] = updatedState[action.commentId].concat(action.data)
      return updatedState
    default:
      return state
  }
}

export default replyReducer