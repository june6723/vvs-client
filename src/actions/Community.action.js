import * as api from '../api/index.js';
import { CREATE_NEW_COMMUNITY, GET_COMMUNITY_POSTS, GET_JOINED_COMMUNITIES, GET_LATEST_COMMUNITIES, GET_ONE_COMMUNITY, JOIN_COMMUNITY } from '../constants/actionTypes.js';

export const createNewCommunity = (communityForm) => async (dispatch) => {
  try {
    const { data: newCommunity } = await api.createNewCommunity(communityForm);
    dispatch({ type: CREATE_NEW_COMMUNITY, newCommunity });
  } catch (error) {
    console.log(error);
  }
};

export const getJoinedCommunities = () => async (dispatch) => {
  try {
    const { data } = await api.getJoinedCommunities();
    dispatch({ type: GET_JOINED_COMMUNITIES, joinedCommunities: data.communityList });
  } catch (error) {
    console.log(error);
  }
};

export const getLatestCommunities = (page, lastId) => async (dispatch) => {
  try {
    const { data } = await api.latestCommunities(page, lastId);
    dispatch({ type: GET_LATEST_COMMUNITIES, latestCommunities: data.result, latestLastId: data.lastId_in_this_query });
  } catch (error) {
    console.log(error);
  }
};

export const getOneCommunity = (value) => async (dispatch) => {
  try {
    const { data: community } = await api.findCommunity('id', value);
    dispatch({ type: GET_ONE_COMMUNITY, community });
  } catch (error) {
    console.log(error);
  }
};

export const getCommunityPosts = (communityId) => async (dispatch) => {
  try {
    const communityPosts = await api.getCommunityPosts(communityId);
    dispatch({ type: GET_COMMUNITY_POSTS, communityPosts });
  } catch (error) {
    console.log(error);
  }
};

export const joinCommunityRequest = (communityId) => async (dispatch) => {
  try {
    const { data } = await api.joinCommunity(communityId);
    dispatch({ type:JOIN_COMMUNITY, updatedCommunity: data });
  } catch (error) {
    console.log(error);
  }
} 