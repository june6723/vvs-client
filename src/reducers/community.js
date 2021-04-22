import { CREATE_NEW_COMMUNITY } from '../constants/actionTypes.js';

const initialState = {
  communities: []
}

const communityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_COMMUNITY:
      return { ...state };
    default:
      return state;
  }
}

export default communityReducer;