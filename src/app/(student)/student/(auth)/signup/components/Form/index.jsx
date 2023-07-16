"use client";

import "@/app/globals.css";
import InputBox from "@/components/InputBox";
import OtpBox from "@/components/OtpBox";
import PasswordInputBox from "@/components/PasswordInputBox";
import SubmitButton from "@/components/SubmitButton";
import Toast from "@/components/Toast";
import apiURL from "@/config";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpForm = () => {
  // next router
  const router = useRouter();

  // FORM VARIABLES
  const [firstName, setFirstName] = useState(""); // To store first name
  const [lastName, setLastName] = useState(""); // To store last name
  const [program, setProgram] = useState("default"); // To store program
  const [email, setEmail] = useState(""); // To store email
  const [password, setPassword] = useState(""); // To store password
  const [confirmPassword, setConfirmPassword] = useState(""); // To confirm password
  const [phoneNumber, setPhoneNumber] = useState(""); // WhatsApp Number

  // TOAST RELATED VARIABLES
  const [isToastVisible, setIsToastVisible] = useState(false); // To show toast
  const [toast, setToast] = useState({}); // {type: "", message: ""}

  // LOADING SPINNER VARIABLES
  const [isLoading, setIsLoading] = useState(false); // To show loading spinner

  // OTP BOX
  const [isOtpSend, setIsOtpSend] = useState(false); // To show otp box
  const [otp, setOtp] = useState(""); // To store otp
  const [buttonText, setButtonText] = useState("verify"); // Button text

  // RESEND OTP RELATED VARIABLES
  const [isOtpResendTimerActive, setIsOtpResendTimerActive] = useState(false); // To show resend otp button
  const [otpResendTimer, setOtpResendTimer] = useState(0); // To store resend otp timer

  // Function to Check if password and confirm password are same
  const handleConfirmPassword = () => {
    if (password !== confirmPassword) {
      return false;
    }
    return true;
  };

  // Function to handle change in input fields
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "program":
        setProgram(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "confirmPassword":
        setConfirmPassword(value);
        break;

      case "phoneNumber":
        setPhoneNumber(value);
        break;
    }
  };

  // Function to handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check password length is greater than 8 char
    if (password.length < 8) {
      setIsToastVisible(true);
      setToast({
        type: "warning",
        message: "Enter a strong password",
      });
      return;
    }

    if (!handleConfirmPassword()) {
      setIsToastVisible(true);
      setToast({
        type: "warning",
        message: "Password not match",
      });
      return;
    }

    /**
     * Send data to server
     * If success, show toast and render otp box
     * If error, show toast with error message
     */

    // Show loading spinner
    setIsLoading(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        program,
        email,
        password,
        confirmPassword,
        phoneNumber,
      }),
    };

    const response = fetch(`${apiURL}/student/signup`, options);
    response
      .then((res) => res.json())
      .then((data) => {
        setIsToastVisible(true);
        if (data.success === true) {
          setIsOtpSend(true); // Show otp box
          setTimeOutToResendOtp(); // Set timer to resend otp

          // Show toast
          setToast({
            type: "success",
            message: "OTP send on your Email",
          });

          // Store session id in session storage
          sessionStorage.setItem("sessionId", data.sessionId);

          return;
        }

        // If success is false then display error toast
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
        setIsLoading(false);
      });

    // Hide loading spinner
    return;
  };

  // Function to handle otp form submit
  const handleOtpFormSubmit = (e) => {
    e.preventDefault();

    // Convert otp to number
    const otpNumber = Number(otp);

    // Check otp is not NaN
    if (isNaN(otpNumber)) {
      setIsToastVisible(true);
      setToast({
        type: "warning",
        message: "Enter a valid OTP",
      });
      return;
    }

    // Session Id
    const sessionId = sessionStorage.getItem("sessionId");

    if (!sessionId) {
      setIsToastVisible(true);
      setToast({
        type: "warning",
        message: "Session expired",
      });
      return;
    }

    // Send otp to server
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionId: sessionId,
      },
      body: JSON.stringify({ otp: otpNumber }),
    };

    // Show loading spinner
    setIsLoading(true);

    const response = fetch(`${apiURL}/student/sign-up-otp-verify`, option);
    response
      .then((res) => res.json())
      .then((data) => {
        setIsToastVisible(true);
        if (data.success === true) {
          setToast({
            type: "success",
            message: data.message,
          });

          // Store authorization token in session storage
          sessionStorage.setItem("authorization", data.authorization);

          // Redirect to dashboard when otp is verified
          setButtonText("Redirecting..."); // Change button text
          setTimeout(() => {
            router.replace("/student/dashboard");
          }, 4000);

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
        setIsLoading(false);
      });
  };

  // Function to add timer for resend otp
  const setTimeOutToResendOtp = () => {
    // Set timer to resend otp
    setOtpResendTimer(60);
    setIsOtpResendTimerActive(true);

    const timer = setInterval(() => {
      setOtpResendTimer((prevTimer) => {
        if (prevTimer === 0) {
          setIsOtpResendTimerActive(false);
          clearInterval(timer);
          return prevTimer;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  // Function to resend otp
  const resendOtp = () => {
    // Set timer to resend otp
    setTimeOutToResendOtp();

    // Session Id
    const sessionId = sessionStorage.getItem("sessionId");

    if (!sessionId) {
      setIsToastVisible(true);
      setToast({
        type: "warning",
        message: "Session expired",
      });
      return;
    }

    // Send otp to server
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionId: sessionId,
      },
    };

    // Show loading spinner
    setIsLoading(true);

    const response = fetch(`${apiURL}/resend-otp`, option);
    response
      .then((res) => res.json())
      .then((data) => {
        setIsToastVisible(true);
        if (data.success === true) {
          setToast({
            type: "success",
            message: data.message,
          });

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
        setIsLoading(false);
      });
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

      {/* Show form when isOtpSend is false */}
      {!isOtpSend && (
        <div className="my-4 p-3">
          <h3 className="text-center text-xl uppercase my-3">
            Sign Up Details
          </h3>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4"
            action=""
          >
            <div className="w-full flex-col flex gap-2">
              <label htmlFor="name">
                Name<span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                <InputBox
                  name="firstName"
                  placeholder="First Name*"
                  type="text"
                  value={firstName}
                  onChangeHandler={onChangeHandler}
                  Required={true}
                />

                <InputBox
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  value={lastName}
                  onChangeHandler={onChangeHandler}
                  Required={false}
                />
              </div>
            </div>
            <div className="w-full flex-col flex">
              <label htmlFor="email">
                Email<span className="text-red-600">*</span>
              </label>
              <InputBox
                name="email"
                placeholder="email@example.com"
                type="email"
                id="email"
                value={email}
                icon={faEnvelope}
                onChangeHandler={onChangeHandler}
                Required={true}
              />
            </div>

            <div className="w-full flex-col flex">
              <label htmlFor="phoneNumber">
                Phone Number<span className="text-red-600">*</span>
              </label>
              <InputBox
                name="phoneNumber"
                placeholder="WhatsApp Number"
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                icon={faWhatsapp}
                onChangeHandler={onChangeHandler}
                Required={true}
              />
            </div>

            <div className="grow flex-col flex">
              <label htmlFor="password">
                Password<span className="text-red-600">*</span>
              </label>
              <PasswordInputBox
                name="password"
                placeholder="Use 8 or more characters with a mix of letters, numbers & symbols"
                type="password"
                id="password"
                value={password}
                Required={true}
                onChangeHandler={onChangeHandler}
              />
            </div>

            <div className="w-full flex-col flex">
              <label htmlFor="confirmPassword">
                Confirm Password<span className="text-red-600">*</span>
              </label>
              <PasswordInputBox
                name="confirmPassword"
                placeholder="Use 8 or more characters with a mix of letters, numbers & symbols"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                Required={true}
                onChangeHandler={onChangeHandler}
              />
            </div>

            <div className="w-full flex-col flex">
              <label htmlFor="program">
                Select Program<span className="text-red-600">*</span>
              </label>
              <div className="border rounded-sm overflow-hidden flex">
                <FontAwesomeIcon
                  className="self-center p-3 text-blue-900"
                  icon={faGraduationCap}
                />
                <select
                  className="py-2 px-3 bg-gray-100 flex-1 cursor-pointer w-10/12"
                  name="program"
                  id="program"
                  value={program}
                  onChange={onChangeHandler}
                  required
                >
                  <option hidden value={"default"}>
                    Select Program
                  </option>
                  <option className="cursor-pointer" value="bca">
                    BCA
                  </option>
                  <option className="cursor-pointer" value="bba">
                    BBA
                  </option>
                  <option className="cursor-pointer" value="bjmc">
                    BJMC
                  </option>
                  <option className="cursor-pointer" value="bmlt">
                    BMLT
                  </option>
                </select>
              </div>

              <div className=" gap-2 text-gray-500 flex items-center my-3">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="termsAndCondition"
                  id="checkBox"
                  required
                />
                <label htmlFor="checkBox" className="text-sm max-w-md">
                  I agree to receive Phone Calls, WhatsApp, Emails or Messages
                  from the college.
                </label>
              </div>
              <div className="my-8 w-full">
                <SubmitButton loading={isLoading} text={"Sign Up"} />
              </div>
            </div>
          </form>
          <p className="text-center">
            Already Registered?{" "}
            <Link
              className="duration-500 text-primary hover:underline font-medium cursor-pointer"
              href="/student/login"
            >
              Login
            </Link>
          </p>
        </div>
      )}

      {/* Show otp box when isOtpSend is true */}
      {isOtpSend && (
        <div className="my-4 p-3">
          <h3 className="text-center text-lg my-3">
            Enter OTP sent on your Email
          </h3>
          <form
            onSubmit={handleOtpFormSubmit}
            className="flex flex-col gap-4"
            action=""
          >
            <OtpBox otp={otp} setOtp={setOtp} />

            {/* Resend otp button */}
            <div>
              <p className="text-center">
                Resend otp{" "}
                {isOtpResendTimerActive ? (
                  <span>in {otpResendTimer}s</span>
                ) : (
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={resendOtp}
                  >
                    click here
                  </span>
                )}
              </p>
            </div>
            <div className="my-8 w-full">
              <SubmitButton loading={isLoading} text={buttonText} />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
