import { ADD_ITEM } from '../constants/actionTypes';

// Use middleware to take complex logic out of Main
// can also pass getState to checkMiddlware
export function checkMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === ADD_ITEM) {
        if (!action.text.trim().length) {
          return;
        }
      }
      return next(action);
    };
  };
}
