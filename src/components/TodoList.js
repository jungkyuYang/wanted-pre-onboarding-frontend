import React from "react";

function TodoList({ todo, isCompleted, onUpdate, onDelete }) {
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
      <button type="button" data-testid="modify-button">
        수정
      </button>
      <button
        type="button"
        data-testid="delete-button"
        onClick={() => {
          onDelete();
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default TodoList;
