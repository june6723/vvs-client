import { AUTH, LOGOUT } from '../constants/actionTypes.js';
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

export const signNewToken = () => async (dispatch) => {
  try {
    // const refreshToken = JSON.parse(localStorage.getItem('refreshToken'))
    const { data } = await api.signNewToken()
    dispatch({ type: AUTH, data })
  } catch (error) {
    dispatch({ type:LOGOUT })
    console.log(error);
  }
}

export const logOut = () => async (dispatch) => {
  try {
    // const refreshToken = JSON.parse(localStorage.getItem('refreshToken'))
    await api.logOut()
    dispatch({ type:LOGOUT })
  } catch (error) {
    console.log(error)
  }
}

// export const keepAuth = () => {
//   try {
//     const accessToken = JSON.parse(localStorage.getItem('accessToken'))
//     const profile = JSON.parse(localStorage.getItem('profile'))
//     const decoded = decode(accessToken)
//     // if(decoded.exp * 1000 < new Date().getTime())
//   } catch (error) {
    
//   }
// };