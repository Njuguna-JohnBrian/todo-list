import { ADD_TODO, REMOVE_TODO, MARK_TODO_COMPLETE } from "../types";

const initialState = [];

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id != payload);
    case MARK_TODO_COMPLETE:
      return state.map((todo) => {
        if (todo.id === payload) todo.is_complete = !todo.is_complete;
        return todo;
      });
    default:
      return state;
  }
};

export default todosReducer;
