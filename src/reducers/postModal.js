import { ACTIVATE_CREATE_POST_MODAL, DEACTIVATE_CREATE_POST_MODAL } from '../constants/actionTypes'

const initialState = {
  showCreatePostModal: false
}

const postModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_CREATE_POST_MODAL:
      return { ...state, showCreatePostModal: true }
    case DEACTIVATE_CREATE_POST_MODAL:
      return { ...state, showCreatePostModal: false }
    default:
      return state
  }
}

export default postModalReducer