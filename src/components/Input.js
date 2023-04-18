import React from "react";

function Input({
  id,
  type,
  labelText,
  value,
  onChange,
  placeholder,
  testid,
  isValid,
}) {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={testid}
      />
      {!isValid && (
        <span className="error-message">올바른 형식이 아닙니다.</span>
      )}
    </div>
  );
}

export default Input;
