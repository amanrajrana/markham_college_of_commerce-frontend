"use client";

import InputBox from "@/components/InputBox";
import PasswordInputBox from "@/components/PasswordInputBox";
import SubmitButton from "@/components/SubmitButton";
import Toast from "@/components/Toast";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

// set api url to make api calls
const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const LoginForm = () => {
  // next Router
  const router = useRouter();

  const [isToastVisible, setIsToastVisible] = useState(false); // TOAST STATE VARIABLE
  const [toast, setToast] = useState({ type: "", message: "" }); // TOAST TYPE AND MESSAGE STATE VARIABLE
  const [loading, setLoading] = useState(false); // SPINNER STATE VARIABLE
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  }); // FORM DATA STATE VARIABLE

  // FORM HANDLERS
  const onChangeHandler = (e) => {
    if (e.target.name === "rememberMe") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
      return;
    }
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = formData.email.trim();
    const password = formData.password.trim();

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

            // If remember me is checked then save the token in local storage else save it in session storage
            if (formData.rememberMe) {
              localStorage.setItem("authorization", data.authorization);
            } else {
              sessionStorage.setItem("authorization", data.authorization);
            }

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
          value={formData.email}
          onChangeHandler={onChangeHandler}
          placeholder={"Enter your Email"}
          type="email"
          icon={faUser}
        />
        <PasswordInputBox
          name={"password"}
          value={formData.password}
          onChangeHandler={onChangeHandler}
          placeholder={"Enter your Password"}
        />
        <div>
          <input
            onChange={onChangeHandler}
            className="mx-2 cursor-pointer"
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            checked={formData.rememberMe}
          />
          <label htmlFor="rememberMe">Remember me!</label>
        </div>

        <SubmitButton loading={loading} text={"Login"} />
      </form>
    </>
  );
};

export default LoginForm;
