import { combineReducers } from 'redux';
import { reposReducer } from './ReposReducer.js';
import { commitsReducer } from './CommitsReducer.js';

const rootReducer = combineReducers({
  reposReducer: reposReducer,
  commitsReducer: commitsReducer,
});

export default rootReducer;