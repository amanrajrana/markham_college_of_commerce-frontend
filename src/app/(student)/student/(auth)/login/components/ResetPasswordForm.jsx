"use client";
import InputBox from "@/components/InputBox";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "userId") setEmail(value);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Password Reset</h1>
      <form className="flex flex-col w-full gap-4 my-4">
        {/* Student user Id can be only email or phone number */}
        <InputBox
          name={"userId"}
          value={email}
          onChangeHandler={onChangeHandler}
          icon={faUser}
          placeholder={"Enter your Email or Phone Number"}
          type="text"
        />
        <button
          className="bg-blue-900 rounded-sm px-4 py-2 uppercase text-white"
          type="submit"
        >
          Get OTP
        </button>
      </form>
    </>
  );
};

export default ResetPasswordForm;
