import { CREATE_POST } from '../constants/actionTypes.js';

const initialState = {
  posts: []
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: state.posts.concat(action.newPost) };
    default:
      return state;
  }
}

export default postReducer;