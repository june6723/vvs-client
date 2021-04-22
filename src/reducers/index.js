import { combineReducers } from 'redux';
import auth from './auth';
import postModal from './postModal';
import communityModal from './communityModal';
import post from './post'
import community from './community';

const reducers = combineReducers({
  auth,
  postModal,
  communityModal,
  post,
  community
})

export default reducers;