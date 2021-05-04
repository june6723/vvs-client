import { ACTIVATE_CREATE_COMMUNITY_MODAL, DEACTIVATE_CREATE_COMMUNITY_MODAL } from '../constants/actionTypes'

const initialState = {
  showCreateCommunityModal: false
}

const communityModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_CREATE_COMMUNITY_MODAL:
      return { ...state, showCreateCommunityModal: true }
    case DEACTIVATE_CREATE_COMMUNITY_MODAL:
      return { ...state, showCreateCommunityModal: false }
    default:
      return state
  }
}

export default communityModalReducer