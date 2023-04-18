import React, { useState } from "react";

function TodoList({ todo, isCompleted, onUpdate, onDelete }) {
  const [editTodo, setEditTodo] = useState(todo);
  const [edit, setEdit] = useState(false);

  return (
    <>
      {edit === true ? (
        <li>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => {
                onUpdate(editTodo, !isCompleted);
              }}
            />
            <input
              type="text"
              value={editTodo}
              data-testid="modify-input"
              onChange={(e) => setEditTodo(e.target.value)}
            ></input>
          </label>
          <button
            type="button"
            data-testid="submit-button"
            onClick={() => {
              onUpdate(editTodo, isCompleted);
              setEdit(false);
            }}
          >
            제출
          </button>
          <button
            type="button"
            data-testid="cancel-button"
            onClick={() => {
              setEdit(false);
            }}
          >
            취소
          </button>
        </li>
      ) : (
        <li>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => {
                onUpdate(editTodo, !isCompleted);
              }}
            />
            <span>{todo}</span>
          </label>
          <button
            type="button"
            data-testid="modify-button"
            onClick={() => {
              setEdit(true);
            }}
          >
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
      )}
    </>
  );
}

export default TodoList;
