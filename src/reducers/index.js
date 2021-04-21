import { combineReducers } from 'redux';
import auth from './auth';
import postModal from './postModal';
import communityModal from './communityModal';
import post from './post'

const reducers = combineReducers({
  auth,
  postModal,
  communityModal,
  post
})

export default reducers;