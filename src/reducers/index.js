import { combineReducers } from 'redux';
import auth from './auth';
import postModal from './postModal';
import post from './post'

const reducers = combineReducers({
  auth,
  postModal,
  post
})

export default reducers;