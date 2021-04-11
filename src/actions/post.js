import * as api from '../api/index.js';
import { CREATE_POST } from '../constants/actionTypes.js';

export const createPost = (postData) => async (dispatch) => {
  try {
    const { data } = await api.createPost(postData);
    dispatch({ type: CREATE_POST, newPost: data });
  } catch (error) {
    console.log(error);
  }
}