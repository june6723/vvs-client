import axios from 'axios';

const LOCAL = "http://localhost:5000";
const HEROKU = "https://vvs-backend.herokuapp.com";
const API = axios.create({ baseURL: LOCAL });


API.interceptors.request.use(async (req) => {
  const currentToken = JSON.parse(localStorage.getItem('accessToken'))
  if (currentToken) {
    req.headers.authorization = `Bearer ${currentToken}`;
  }
  return req;
})

// auth
export const logIn = (formData) => API.post('/auth/login', formData, { withCredentials: true });
export const signUp = (formData) => API.post('/auth/signup', formData, { withCredentials: true });
export const signNewToken = () => API.post('/auth/refresh-token', {refreshToken:JSON.parse(localStorage.getItem('refreshToken'))}, { withCredentials: true })
export const logOut = () => API.post('/auth/logout', {refreshToken:JSON.parse(localStorage.getItem('refreshToken'))},{ withCredentials: true })

// upload
export const upload = (formData) => API.post('/upload', formData)

// user
export const getJoinedCommunities = () => API.get(`/user/me/communities`);
export const getUserJoinedCommunities = (userId) => API.get(`/user/${userId}/communities`);
export const findUser = (cmd, value) => API.get(`/user/find?cmd=${cmd}&value=${value}`);
export const uploadProfileImg = (url) => API.post('/user/profile-image', { url })
export const followUser = (userId) => API.patch(`/user/follow/${userId}`)

// community
export const createNewCommunity = (communityForm) => API.post('/communities', communityForm);
export const findCommunity = (cmd, value) => API.get(`/communities/find?cmd=${cmd}&value=${value}`);
export const getCommunityPosts = (communityId) => API.get(`/communities/${communityId}/posts`);
export const joinCommunity = (communityId) => API.patch(`/communities/${communityId}/join`);
export const approveJoinRequest = (communityId, userId) => API.patch(`/communities/${communityId}/join/${userId}`);
export const latestCommunities = (page, lastId) => lastId ? API.get(`/communities/latest?page=${page}&lastId=${lastId}`) : API.get(`/communities/latest?page=${page}`);

// post
export const createPost = (postData) => API.post('/posts', postData);
export const getMyPosts = () => API.get('/posts/myposts');
export const likePost = (postId) => API.patch(`/posts/${postId}/likes`)
export const dislikePost = (postId) => API.patch(`/posts/${postId}/dislikes`)

// comment
export const getComments = (postId) => API.get(`/comments/post/${postId}`)
export const createComment = (commentForm) => API.post('/comments', commentForm)
export const createReply = (commentForm) => API.post(`/comments/reply`, commentForm)
export const likeComment = (commentId) => API.patch(`/comments/${commentId}`)
export const getReplies = (commentId) => API.get(`/comments/${commentId}`)