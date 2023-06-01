import * as types from "../reducers/actionTypes";

export function addTodo(title) {
  return {
    type: types.ADD_TODO,
    payload: title,
  };
}
export function toggleTodo(id) {
  return {
    type: types.TOGGLE_COMPLETED,
    payload: id,
  };
}
