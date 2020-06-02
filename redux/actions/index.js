const ADD_INGREDIENT = 'ADD_INGREDIENT';
const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export function addIngredient(text) {
  return { type: ADD_INGREDIENT, text };
}

export function deleteIngredient(index) {
  return { type: DELETE_INGREDIENT, index };
}
