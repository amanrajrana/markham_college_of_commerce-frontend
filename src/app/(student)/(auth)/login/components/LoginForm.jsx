"use client";

import InputBox from "@/components/InputBox";
import PasswordInputBox from "@/components/PasswordInputBox";
import SubmitButton from "@/components/SubmitButton";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Student Login Portal</h1>
      <form className="flex flex-col w-full gap-4 my-4">
        <InputBox
          name={"email"}
          value={email}
          onChangeHandler={onChangeHandler}
          placeholder={"Enter your Email"}
          type="email"
          icon={faUser}
        />
        <PasswordInputBox
          name={"password"}
          value={password}
          onChangeHandler={onChangeHandler}
          placeholder={"Enter your Password"}
        />

        <SubmitButton text={"Login"} />
      </form>
    </>
  );
};

export default LoginForm;
