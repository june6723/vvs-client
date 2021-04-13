import { CREATE_POST, GET_MY_POSTS } from '../constants/actionTypes.js';

const initialState = {
  posts: []
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      const newArray = [action.newPost];
      return { ...state, posts: newArray.concat(state.posts) };
    case GET_MY_POSTS:
      return { ...state, posts: state.posts.concat(action.data) };
    default:
      return state;
  }
}

export default postReducer;