const BASE_URL = "https://www.pre-onboarding-selection-task.shop";

export const API_ENDPOINTS = {
  AUTH_SIGNUP: `${BASE_URL}/auth/signup`,
  AUTH_SIGNIN: `${BASE_URL}/auth/signin`,
  TODO_CREATE: `${BASE_URL}/todos`,
  TODO_GET: `${BASE_URL}/todos`,
  TODO_UPDATE: (id) => `${BASE_URL}/todos/${id}`,
  TODO_DELETE: (id) => `${BASE_URL}/todos/${id}`,
};
