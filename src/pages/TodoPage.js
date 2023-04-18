import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TodoList from "../components/TodoList";

function TodoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      return navigate("/signin");
    }
  }, [navigate]);

  return (
    <ul>
      <TodoList todo="TODO 1" isCompleted={false} />
      <TodoList todo="TODO 2" isCompleted={true} />
    </ul>
  );
}

export default TodoPage;
