import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TodoList from "../components/TodoList";

function TodoPage() {
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      return navigate("/signin");
    }
  }, [navigate]);

  const createTodo = async () => {
    const url = "https://www.pre-onboarding-selection-task.shop/todos";
    const token = localStorage.getItem("access_token");
    const requetOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: newTodo }),
    };
    try {
      const response = await fetch(url, requetOptions);

      if (!response.ok) {
        throw new Error("Todo 생성 요청을 보내는데 실패했습니다.");
      }
      const data = await response.json();
      setTodoList([...todoList, data]);
      setNewTodo("");
    } catch (error) {
      console.error("Todo Error:", error);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          placeholder="Todo를 입력해주세요."
          data-testid="new-todo-input"
        ></input>
        <button
          type="button"
          data-testid="new-todo-add-button"
          onClick={createTodo}
        >
          추가
        </button>
      </div>
      <ul>
        <TodoList todo="TODO 1" isCompleted={false} />
        <TodoList todo="TODO 2" isCompleted={true} />
      </ul>
    </>
  );
}

export default TodoPage;
