import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
