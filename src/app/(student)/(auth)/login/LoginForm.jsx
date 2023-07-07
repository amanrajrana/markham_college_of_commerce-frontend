"use client";

import {
  faEye,
  faEyeSlash,
  faKey,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  return (
    <>
      {" "}
      <h1 className="text-2xl font-bold text-center">Student Login Portal</h1>
      <form className="flex flex-col w-full gap-4 my-4">
        <div className="border rounded-sm overflow-hidden flex">
          <FontAwesomeIcon className="self-center p-3" icon={faUser} />
          <input
            className="py-2 px-3 bg-gray-100 grow"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="border rounded-sm flex overflow-hidden">
          <FontAwesomeIcon className="self-center p-3" icon={faKey} />
          <input
            className="py-2 px-3 bg-gray-100 grow"
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
          />
          <FontAwesomeIcon
            className="self-center p-3 bg-gray-100 cursor-pointer"
            icon={isPasswordVisible ? faEyeSlash : faEye}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        </div>

        <button
          className="bg-primary rounded-sm px-4 py-2 uppercase text-white"
          type="submit"
        >
          Login
        </button>
      </form>
      <Link
        className="duration-500 text-primary hover:underline font-medium"
        href="/signup"
      >
        New Student?
      </Link>
    </>
  );
};

export default LoginForm;
