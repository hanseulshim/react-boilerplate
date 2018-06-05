import { combineReducers } from 'redux';
import nameReducer from './nameReducer';

const rootReducer = combineReducers({
  showName: nameReducer,
});

export default rootReducer;
