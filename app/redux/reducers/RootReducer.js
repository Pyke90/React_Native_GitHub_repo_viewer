import { combineReducers } from 'redux';

import inputReducer from './InputReducer.js';

const rootReducer = combineReducers({
  inputReducer: inputReducer,
});

export default rootReducer;