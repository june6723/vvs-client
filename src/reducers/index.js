import { combineReducers } from 'redux';
import auth from './Auth.reducer';
import postModal from './PostModal.reducer';
import communityModal from './CommunityModal.reducer';
import post from './Post.reducer'
import community from './Community.reducer';
import comment from './Comment.reducer';
import reply from './Reply.reducer';
import user from './User.reducer';

const reducers = combineReducers({
  auth,
  postModal,
  communityModal,
  post,
  community,
  user,
  comment,
  reply
})

export default reducers;