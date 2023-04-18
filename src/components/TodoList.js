import React from "react";

function TodoList({ todo, isCompleted, onUpdate }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => {
            onUpdate(!isCompleted);
          }}
        />
        <span>{todo}</span>
      </label>
    </li>
  );
}

export default TodoList;
