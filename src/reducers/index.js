import { combineReducers } from 'redux';
import nameReducer from 'reducers/nameReducer';

const rootReducer = combineReducers({
  showName: nameReducer
});

export default rootReducer;
