import axios from 'axios';

const LOCAL = "http://localhost:5000";
const HEROKU = "https://vvs-backend.herokuapp.com";
const API = axios.create({ baseURL: LOCAL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
  }

  return req;
})

// auth
export const logIn = (formData) => API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);
export const signNewToken = (refreshToken) => API.post('/auth/refresh-token', refreshToken)
export const logOut = (refreshToken) => API.delete('/auth/logout', refreshToken)

// user
export const getJoinedCommunities = () => API.get(`/user/me/communities`);
export const getUserJoinedCommunities = (userId) => API.get(`/user/${userId}/communities`);
export const findUser = (cmd, value) => API.get(`/user/find?cmd=${cmd}&value=${value}`);

// community
export const createNewCommunity = (communityForm) => API.post('/communities', communityForm);
export const findCommunity = (cmd, value) => API.get(`/communities/find?cmd=${cmd}&value=${value}`);
export const getCommunityPosts = (communityId) => API.get(`/communities/${communityId}/posts`);
export const joinCommunity = (communityId) => API.patch(`/communities/${communityId}/join`);
export const approveJoinRequest = (communityId, userId) => API.patch(`/communities/${communityId}/join/${userId}`);
export const latestCommunities = (page, lastId) => lastId ? API.get(`/communities/latest?page=${page}&lastId=${lastId}`) : API.get(`/communities/latest?page=${page}`);

// post
export const createPost = (postData) => API.post('/posts', postData);
export const createCommunityPost = (postData, communityId) => API.post(`/posts/community/${communityId}`, postData);
export const getMyPosts = () => API.get('/posts/myposts');
