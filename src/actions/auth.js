import { AUTH } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history.go(0);
  } catch (error) {
    console.log(error);
  }
}

export const logIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.logIn(formData);
    dispatch({ type: AUTH, data });
    history.go(0);
  } catch (error) {
    console.log(error);
  }
}