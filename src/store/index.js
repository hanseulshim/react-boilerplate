import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from 'reducers';
import initialState from 'reducers/initialState';

const logger = createLogger({
  collapsed: true,
});

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger),
);
