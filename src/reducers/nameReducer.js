import * as types from 'constants';
import initialState from './initialState';

export default (state = initialState.showName, action) => {
  switch (action.type) {
    case types.SHOW_NAME:
      return !state;
    default:
      return state;
  }
};
