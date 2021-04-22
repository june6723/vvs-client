import * as api from '../api/index.js';
import { CREATE_NEW_COMMUNITY } from '../constants/actionTypes.js';

export const createNewCommunity = (communityForm) => async (dispatch) => {
  try {
    await api.createNewCommunity(communityForm);
    dispatch({ type: CREATE_NEW_COMMUNITY });
  } catch (error) {
    console.log(error);
  }
};