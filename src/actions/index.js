import * as types from 'constants';

export const showName = () => dispatch => {
  dispatch({
    type: types.SHOW_NAME
  });
};
