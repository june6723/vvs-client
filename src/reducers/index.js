import { combineReducers } from 'redux';
import auth from './auth';
import postModal from './postModal';

const reducers = combineReducers({
  auth,
  postModal
})

export default reducers;