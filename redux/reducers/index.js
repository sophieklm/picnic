import { ADD_INGREDIENT, DELETE_INGREDIENT } from '../constants/actionTypes';

const initialState = {
  ingredients: [],
  recipe: 'Fruitsalad',
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_INGREDIENT) {
    return Object.assign({}, state, {
      ingredients: state.ingredients.concat(action.text),
    });
  }
  if (action.type === DELETE_INGREDIENT) {
    return Object.assign({}, state, {
      ingredients: state.ingredients
        .slice(0, action.index)
        .concat(state.ingredients.slice(action.index + 1)),
    });
  }
  return state;
}

export default rootReducer;
