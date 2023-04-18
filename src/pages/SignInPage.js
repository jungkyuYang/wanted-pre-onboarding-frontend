import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";

function SignInPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState({ isEmail: false, isPassword: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://www.pre-onboarding-selection-task.shop/auth/signin";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, password: form.password }),
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error("로그인 요청을 보내는데 실패했습니다.");
      }
      const JWTToken = await response.json();

      for (const [key, value] of Object.entries(JWTToken)) {
        localStorage.setItem([key], [value]);
      }
      return navigate("/todo");
    } catch (error) {
      console.error("SignIn Error:", error);
    }
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
