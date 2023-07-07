"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";

const Form = () => {
  const [visibleForm, setVisibleForm] = useState("loginForm");

  return (
    <>
      {visibleForm === "loginForm" && <LoginForm />}
      {visibleForm === "resetPasswordForm" && <ResetPasswordForm />}
      <p>
        Forgot password?{" "}
        <span
          onClick={() =>
            setVisibleForm(
              visibleForm === "loginForm" ? "resetPasswordForm" : "loginForm"
            )
          }
          className="duration-500 text-primary hover:underline font-medium cursor-pointer"
        >
          {visibleForm === "loginForm" ? "Reset Password" : "Login"}
        </span>
      </p>
    </>
  );
};

export default Form;
