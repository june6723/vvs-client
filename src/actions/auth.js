import { AUTH, KEEP } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
}

export const logIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.logIn(formData);
    dispatch({ type: AUTH, data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
}

export const keepAuth = () => ({ type: KEEP });
