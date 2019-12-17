import { combineReducers } from 'redux';

import { inputReducer } from './InputReducer.js';
import { reposReducer } from './ReposReducer.js';
import { commitsReducer } from './CommitsReducer.js';

const rootReducer = combineReducers({
  inputReducer: inputReducer,
  reposReducer: reposReducer,
  commitsReducer: commitsReducer,
});

export default rootReducer;