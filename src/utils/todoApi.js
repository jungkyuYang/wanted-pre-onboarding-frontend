import { API_ENDPOINTS } from "./apiEndpoints";
import { handleResponse } from "./handleResponse";

export const todoApi = {
  createTodo: async (token, newTodo) => {
    const response = await fetch(API_ENDPOINTS.TODO_CREATE, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: newTodo }),
    });
    return handleResponse(response);
  },

  getTodo: async (token) => {
    const response = await fetch(API_ENDPOINTS.TODO_GET, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },

  updateTodo: async (token, id, editTodo, changedIsCompleted) => {
    const response = await fetch(API_ENDPOINTS.TODO_UPDATE(id), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: editTodo,
        isCompleted: changedIsCompleted,
      }),
    });
    return handleResponse(response);
  },

  deleteTodo: async (token, id) => {
    const response = await fetch(API_ENDPOINTS.TODO_DELETE(id), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },
};
