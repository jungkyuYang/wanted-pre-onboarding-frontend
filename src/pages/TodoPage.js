import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TodoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      return navigate("/signin");
    }
  }, [navigate]);

  return <>TodoPage</>;
}

export default TodoPage;
