import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import { authApi } from "../utils/authApi";

function SignUpPage() {
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
    const data = await authApi.signup(form);
    if (data) {
      return navigate("/signin");
    }
  };

  function handleEmailChange(e) {
    const newValue = e.target.value;

    setForm({ ...form, email: newValue });
    setIsValid({ ...isValid, isEmail: newValue.indexOf("@") !== -1 });
  }

  function handlePasswordChange(e) {
    const newValue = e.target.value;

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
        data-testid="signup-button"
        disabled={!isValid.isEmail || !isValid.isPassword}
      >
        회원가입
      </button>
    </form>
  );
}

export default SignUpPage;
