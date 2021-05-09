import * as api from '../api'
import { FIND_USER } from '../constants/actionTypes';

export const findUserById = (userId) => async (dispatch) => {
  try {
    const { data } = await api.findUser("id", userId)
    dispatch({ type: FIND_USER, data });
  } catch (error) {
    console.log(error)
  }
}