import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, markTodoAsComplete } from "../redux/actions/todosActions";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => (
        <>
          <h4
            key={todo.id}
            style={{ textDecoration: todo.is_complete ? "line-through" : "" }}
          >
            {todo.title}
          </h4>
          <div style={{ display: "flex" }}>
            <button onClick={() => dispatch(removeTodo(todo.id))}>x</button>
            <button onClick={() => dispatch(markTodoAsComplete(todo.id))}>
      {todo.is_complete ? `mark as Incomplete` : `mark as comlete`}
            </button>
          </div>
        </>
      ))}
    </div>
  );
}

export default Todos;
