import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import TodoPage from "./pages/TodoPage";
import NotFoundPage from "./pages/NotFoundPage";

const ROUTES = {
  MAIN: "/",
  SIGNUP: "/signup",
  SIGNIN: "/signin",
  TODO: "/todo",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
        <Route path={ROUTES.TODO} element={<TodoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
