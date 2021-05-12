import * as api from '../api/index.js';
import { CREATE_COMMUNITY_POST, CREATE_POST, GET_MY_POSTS, LIKE_POST } from '../constants/actionTypes.js';

export const createPost = (postData) => async (dispatch) => {
  try {
    const { data } = await api.createPost(postData);
    dispatch({ type: CREATE_POST, newPost: data });
  } catch (error) {
    console.log(error);
  }
};

export const createCommunityPost = (postData) => async (dispatch) => {
  try {
    const { data } = await api.createPost(postData);
    dispatch({ type: CREATE_COMMUNITY_POST, newPost: data });
  } catch (error) {
    console.log(error);
  }
};

export const getMyPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getMyPosts();
    dispatch({ type: GET_MY_POSTS, data });
  } catch (error) {
    console.log(error);
  }
}

export const likePost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.likePost(postId)
    // dispatch({ type: LIKE_POST, data })
  } catch (error) {
    console.log(error)
  }
}

export const dislikePost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.dislikePost(postId)
    // dispatch({ type: LIKE_POST, data })
  } catch (error) {
    console.log(error)
  }
}