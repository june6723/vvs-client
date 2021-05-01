import axios from 'axios';

const LOCAL = "http://localhost:5000";
const HEROKU = "https://vvs-backend.herokuapp.com";
const API = axios.create({ baseURL: HEROKU });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
  }

  return req;
})

// user
export const logIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const getJoinedCommunities = () => API.get(`/user/me/communities`);
export const getUserJoinedCommunities = (userId) => API.get(`/user/${userId}/communities`);
export const findUser = (cmd, value) => API.get(`/user/find?cmd=${cmd}&value=${value}`);

// community
export const createNewCommunity = (communityForm) => API.post('/communities', communityForm);

// post
export const createPost = (postData) => API.post('/posts', postData);
export const getMyPosts = () => API.get('/posts/myposts');
