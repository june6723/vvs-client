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


export const logIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const createPost = (postData) => API.post('/posts', postData);
export const getMyPosts = () => API.get('/posts/myposts');

export const createNewCommunity = (communityForm) => API.post('/communities', communityForm);