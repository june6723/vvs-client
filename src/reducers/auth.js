import { AUTH, KEEP, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { profile: null, token: null }, action) => {
  switch (action.type) {
    case AUTH :
      const profile = action?.data?.profile;
      const token = action?.data?.token;
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('token', JSON.stringify(token));
      return { ...state, profile, token };
    case LOGOUT :
      localStorage.clear()
      return { ...state, profile: null, token: null };
    case KEEP:
      return { ...state, profile: JSON.parse(localStorage.getItem('profile')), token: JSON.parse(localStorage.getItem('token')) };
    default:
      return state
  }
};

export default authReducer;
