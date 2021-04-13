import * as api from '../api/index.js';
import { CREATE_POST, GET_MY_POSTS } from '../constants/actionTypes.js';

export const createPost = (postData) => async (dispatch) => {
  try {
    const { data } = await api.createPost(postData);
    dispatch({ type: CREATE_POST, newPost: data });
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