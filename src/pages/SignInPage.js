import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import { authApi } from "../utils/authApi";

function SignInPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState({ isEmail: false, isPassword: false });

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      return navigate("/todo");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await authApi.signin(form);
    for (const [key, value] of Object.entries(data)) {
      localStorage.setItem([key], [value]);
    }
    return navigate("/todo");
  };

  function handleEmailChange(event) {
    const newValue = event.target.value;

    setForm({ ...form, email: newValue });
    setIsValid({ ...isValid, isEmail: newValue.indexOf("@") !== -1 });
  }

  function handlePasswordChange(event) {
    const newValue = event.target.value;

    setForm({ ...form, password: newValue });
    setIsValid({ ...isValid, isPassword: newValue.length >= 8 });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="email"
        value={form.email}
        onChange={handleEmailChange}
        placeholder="이메일"
        data-testid="email-input"
        isValid={isValid.isEmail}
      />
      <Input
        id="password"
        type="password"
        value={form.password}
        onChange={handlePasswordChange}
        placeholder="비밀번호"
        data-testid="password-input"
        isValid={isValid.isPassword}
      />
      <button
        type="submit"
        data-testid="signin-button"
        disabled={!isValid.isEmail || !isValid.isPassword}
      >
        로그인
      </button>
    </form>
  );
}

export default SignInPage;
