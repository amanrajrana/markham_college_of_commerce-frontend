"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";

const Form = () => {
  const [visibleForm, setVisibleForm] = useState("loginForm");

  return (
    <>
      {visibleForm === "loginForm" && <LoginForm />}
      {visibleForm === "resetPasswordForm" && (
        <ResetPasswordForm role="student" />
      )}
      <p>
        {visibleForm === "loginForm"
          ? "Forgot Password? "
          : "Login With Password? "}
        <span
          onClick={() =>
            setVisibleForm(
              visibleForm === "loginForm" ? "resetPasswordForm" : "loginForm"
            )
          }
          className="duration-500 text-primary-regular hover:underline font-medium cursor-pointer"
        >
          {visibleForm === "loginForm" ? "Reset" : "Click here"}
        </span>
      </p>
    </>
  );
};

export default Form;
