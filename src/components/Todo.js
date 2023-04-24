import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleCheckbox, removeTodo } from "../redux/todoapp/actions";
export default function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  return todos.map((todo) => (
    <div>
      <div>
        <input onChange={()=>dispatch(handleCheckbox(todo.id))} type="checkbox" checked={todo.completed} />
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div>
        <span onClick={() => dispatch(removeTodo(todo.id))}>X</span>
      </div>
    </div>
  ));
}
