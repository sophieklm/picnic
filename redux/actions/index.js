import { ADD_ITEM, DELETE_ITEM } from '../constants/actionTypes';

export function addItem(text) {
  return { type: ADD_ITEM, text };
}

export function deleteItem(index) {
  return { type: DELETE_ITEM, index };
}

export function addItemAsync(text) {
  return (dispatch) => {
    if (text === 'Grapes') {
      return;
    }
    setTimeout(() => {
      dispatch(addItem(text));
    }, 1000);
  };
}
