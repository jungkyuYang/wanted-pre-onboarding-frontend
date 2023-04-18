import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
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
    <Routes>
      <Route path={ROUTES.MAIN} element={<Layout />}>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
        <Route path={ROUTES.TODO} element={<TodoPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
