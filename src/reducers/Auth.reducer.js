import { AUTH, AUTH_LOADING, CHECK, DONE, KEEP, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { profile: null, isLoggedIn: undefined, isLoading: true }, action) => {
  switch (action.type) {
    case AUTH :
      const { profile, accessToken, accessTokenExp, refreshToken } = action?.data
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
      localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
      localStorage.setItem('accessTokenExp', JSON.stringify(accessTokenExp));
      return { ...state, profile, isLoggedIn: true, isLoading: false };
    case LOGOUT :
      localStorage.clear()
      return { ...state, profile: null, isLoggedIn: false, isLoading: false };
    case CHECK:
      if (localStorage.getItem('accessToken')) return { ...state, isLoggedIn: true }
      return { ...state, isLoggedIn: false }
    case DONE:
      return { ...state, isLoading: false}
    case AUTH_LOADING:
      return { ...state, isLoading: true}
    default:
      return state
  }
};

export default authReducer;
