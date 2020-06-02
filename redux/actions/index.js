import { ADD_INGREDIENT, DELETE_INGREDIENT } from '../constants/actionTypes';

export function addIngredient(text) {
  return { type: ADD_INGREDIENT, text };
}

export function deleteIngredient(index) {
  return { type: DELETE_INGREDIENT, index };
}
