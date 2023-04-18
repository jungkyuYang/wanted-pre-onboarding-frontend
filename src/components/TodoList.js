import React from "react";

function TodoList({ todo, isCompleted }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} />
        <span>{todo}</span>
      </label>
    </li>
  );
}

export default TodoList;
