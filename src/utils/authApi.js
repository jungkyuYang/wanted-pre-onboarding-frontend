import { API_ENDPOINTS } from "./apiEndpoints";
import { handleResponse, handleSignUp } from "./handleResponse";

export const authApi = {
  signup: async (form) => {
    const response = await fetch(API_ENDPOINTS.AUTH_SIGNUP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, password: form.password }),
    });
    return handleSignUp(response);
  },

  signin: async (form) => {
    const response = await fetch(API_ENDPOINTS.AUTH_SIGNIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, password: form.password }),
    });
    return handleResponse(response);
  },
};
