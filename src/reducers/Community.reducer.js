import { 
  CREATE_NEW_COMMUNITY,
  GET_JOINED_COMMUNITIES,
  GET_LATEST_COMMUNITIES,
  GET_ONE_COMMUNITY,
  GET_COMMUNITY_POSTS,
  JOIN_COMMUNITY,
  CLEAR_VIEW_COMMUNITY,
  CREATE_COMMUNITY_POST
} from '../constants/actionTypes.js';

const initialState = {
  joinedCommunities: [],
  latestCommunities: [],
  latestLastId: "",
  viewCommunity: null,
  communityPosts: [],
}

const communityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_COMMUNITY:
      const newList = state.latestCommunities;
      newList?.unshift(action.newCommunity);
      return { ...state, latestCommunities: newList };
    case GET_JOINED_COMMUNITIES:
      return { ...state, joinedCommunities: action.joinedCommunities };
    case GET_LATEST_COMMUNITIES:
      return { ...state, latestCommunities: action.latestCommunities, latestLastId: action.latestLastId };
    case GET_ONE_COMMUNITY:
      return { ...state, viewCommunity: action.community };
    case GET_COMMUNITY_POSTS:
      return { ...state, communityPosts: action.communityPosts };
    case JOIN_COMMUNITY:
      return { ...state, viewCommunity: action.updatedCommunity}
    case CLEAR_VIEW_COMMUNITY:
      return { ...state, viewCommunity: null, communityPosts: null }
    case CREATE_COMMUNITY_POST:
      const newArray = [action.newPost];
      return { ...state, communityPosts: newArray.concat(state.communityPosts) };
    default:
      return state;
  }
}

export default communityReducer;