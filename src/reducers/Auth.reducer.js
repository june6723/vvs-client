import { AUTH, CHECK, KEEP, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { profile: null, isLoggedIn: false, isLoading: true, isFirstLoading:true}, action) => {
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
    case KEEP:
      return { ...state, profile, isLoggedIn: true, isLoading: false };
    case CHECK:
      if (localStorage.getItem('accessToken')) return { ...state, isLoggedIn: true, isFirstLoading: false }
      return { ...state, isLoggedIn: false, isLoading:false, isFirstLoading: false }
    case "DONE":
      return { ...state, isLoading: false}
    default:
      return state
  }
};

export default authReducer;
