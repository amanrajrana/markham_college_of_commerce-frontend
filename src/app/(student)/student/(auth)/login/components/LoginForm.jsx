"use client";

import InputBox from "@/components/InputBox";
import PasswordInputBox from "@/components/PasswordInputBox";
import SubmitButton from "@/components/SubmitButton";
import Toast from "@/components/Toast";
import apiURL from "@/config";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  // next Router
  const router = useRouter();

  // FORM STATE VARIABLES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TOAST STATE VARIABLES
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });

  // LOADING STATE VARIABLE
  const [loading, setLoading] = useState(false);

  // FORM HANDLERS
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setIsToastVisible(true);
      setToast({ type: "warning", message: "Please fill all the fields" });
      return;
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    try {
      setLoading(true); // LOADING STARTED

      fetch(`${apiURL}/student/signin`, options)
        .then((res) => res.json())
        .then((data) => {
          setIsToastVisible(true); // TOAST VISIBLE

          // Check if the response is success
          if (data.success === true) {
            setToast({
              type: "success",
              message: data.message,
            });

            // Save the token in local storage
            localStorage.setItem("studentToken", data.token);

            // redirect to dashboard
            router.replace("/student/dashboard");
            return;
          }

          if (data.success === false) {
            setToast({
              type: "danger",
              message: data.message,
            });
          }
        })
        .catch((err) => {
          setIsToastVisible(true);
          setToast({
            type: "danger",
            message: "Something went wrong",
          });
        })
        .finally(() => {
          setLoading(false); // LOADING ENDED
        });
    } catch (err) {
      setIsToastVisible(true);
      setToast({
        type: "danger",
        message: err.message || "Something went wrong",
      });
    }
  };

  return (
    <>
      {isToastVisible && (
        <Toast
          toastType={toast.type}
          message={toast.message}
          setIsToastVisible={setIsToastVisible}
        />
      )}
      <h1 className="text-2xl font-bold text-center">Student Login Portal</h1>
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col w-full gap-4 my-4"
      >
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

        <SubmitButton loading={loading} text={"Login"} />
      </form>
    </>
  );
};

export default LoginForm;
