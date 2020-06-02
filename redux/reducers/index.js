import { ADD_ITEM, DELETE_ITEM } from '../constants/actionTypes';

const initialState = {
  items: [],
  event: 'Picnic',
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ITEM) {
    return Object.assign({}, state, {
      items: state.items.concat(action.text),
    });
  }
  if (action.type === DELETE_ITEM) {
    return Object.assign({}, state, {
      items: state.items
        .slice(0, action.index)
        .concat(state.items.slice(action.index + 1)),
    });
  }
  return state;
}

export default rootReducer;
