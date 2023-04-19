import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { todoApi } from "../utils/todoApi";
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

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await todoApi.getTodo(localStorage.getItem("access_token"));
      setTodoList(data);
    };
    fetchTodo();
  }, []);

  const onAddHandler = async () => {
    if (newTodo === "") return;

    const data = await todoApi.createTodo(
      localStorage.getItem("access_token"),
      newTodo
    );
    setTodoList([...todoList, data]);
    setNewTodo("");
  };

  const onChangeHandler = async (id, editTodo, changedIsCompleted) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? { ...todo, todo: editTodo, isCompleted: changedIsCompleted }
          : todo
      )
    );
    await todoApi.updateTodo(
      localStorage.getItem("access_token"),
      id,
      editTodo,
      changedIsCompleted
    );
  };

  const onDeleteHandler = async (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    await todoApi.deleteTodo(localStorage.getItem("access_token"), id);
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
          onClick={onAddHandler}
        >
          추가
        </button>
      </div>
      <ul>
        {todoList.map(({ id, todo, isCompleted }) => (
          <TodoList
            key={id}
            todo={todo}
            isCompleted={isCompleted}
            onUpdate={(editTodo, isCompleted) => {
              onChangeHandler(id, editTodo, isCompleted);
            }}
            onDelete={() => {
              onDeleteHandler(id);
            }}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoPage;
