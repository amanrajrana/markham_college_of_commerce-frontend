"use client";
import InputBox from "@/components/InputBox";
import OtpBox from "@/components/OtpBox";
import PasswordInputBox from "@/components/PasswordInputBox";
import SubmitButton from "@/components/SubmitButton";
import Toast from "@/components/Toast";
import { checkPasswordPolicy } from "@/utils/passwordPolicy";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

// set api url to make api calls
const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const ResetPasswordForm = ({ role }) => {
  // next Router
  const router = useRouter();

  // =========================== STATE VARIABLES ===========================
  const [authorization, setAuthorization] = useState(""); // Get authorization from api
  const [email, setEmail] = useState(""); // Get Student email to forgot password
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [isOtpVerify, setIsOtpVerify] = useState(false);
  const [isOtpResendTimerActive, setIsOtpResendTimerActive] = useState(false); // To show resend otp button
  const [otpResendTimer, setOtpResendTimer] = useState(0); // To store resend otp timer
  const [otp, setOtp] = useState(""); // Get otp from user
  const [sessionId, setSessionId] = useState(""); // Get session id from api

  // TOAST STATE VARIABLES
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toast, setToast] = useState({
    type: "",
    message: "",
  });

  const [passwordFormData, setPasswordFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  // LOADING STATE VARIABLE
  const [loading, setLoading] = useState({
    isLoading: false,
    loadingText: "Loading...",
  });

  // Set Email
  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  // Password Form change handler
  const passwordFormChangeHandler = (e) => {
    setPasswordFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  // Send email for validating and requesting otp
  const handleRequestOtp = (e) => {
    e.preventDefault();

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, role }),
    };

    setLoading({ isLoading: true, loadingText: "Sending OTP..." });

    fetch(`${apiURL}/password-recovery/password-recovery-otp-request`, option)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Show toast
        setIsToastVisible(true);

        if (!data.success) {
          // set toast message and type
          setToast({
            type: "danger",
            message: data.message,
          });
          return;
        }

        // / set toast message and type
        setToast({
          type: "success",
          message: data.message,
        });

        // Set opt resend timer
        setTimeOutToResendOtp();

        // Set isOtpSend to true to display otp box
        setSessionId(data.sessionId);
        setIsOtpSend(true);
      })
      .catch((err) => {
        console.log(err);
        setIsToastVisible(true);
        setToast({
          type: "danger",
          message: "Something went wrong",
        });
      })
      .finally(() => {
        setLoading({ isLoading: false, loadingText: "Loading..." });
      });
  };

  // Verify otp
  const handleVerifyOtp = (e) => {
    e.preventDefault();

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionId,
      },
      body: JSON.stringify({ otp }),
    };

    setLoading({ isLoading: true, loadingText: "Verifying OTP..." });

    fetch(`${apiURL}/password-recovery/password-recovery-otp-verify`, option)
      .then((res) => res.json())
      .then((data) => {
        // Show toast
        setIsToastVisible(true);

        // If response status is false then show error
        if (!data.success) {
          setToast({
            type: "danger",
            message: data.message,
          });
          return;
        }

        setToast({
          type: "success",
          message: data.message,
        });

        // Set isOtpVerify to true to display password box
        setIsOtpVerify(true);
        setAuthorization(data.authorization);
        return;
      })
      .catch((err) => {
        setIsToastVisible(true);
        setToast({
          type: "danger",
          message: "Something went wrong",
        });
      })
      .finally(() => {
        setLoading({ isLoading: false, loadingText: "Loading..." });
      });
  };

  // Resend otp
  const resendOtp = () => {
    // Set timer to resend otp
    setTimeOutToResendOtp();

    // Send otp to server
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sessionId,
      },
    };

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
      });
  };

  // Set new password
  const newPasswordSet = (e) => {
    e.preventDefault();

    /**
     * @description This module is used to check password policy. i.e password length, password strength
     * etc and also check password and confirm password should be same.
     * @returns {object} - Returns object with @status {boolean} and @message {string}.
     */
    const passwordPolicy = checkPasswordPolicy(
      passwordFormData.password,
      passwordFormData.confirmPassword
    );

    // If password not matched then display error and return
    if (!passwordPolicy.status) {
      setIsToastVisible(true);
      setToast({
        type: "danger",
        message: passwordPolicy.message,
      });
      return;
    }

    // Set spinner on submit button
    setLoading({
      isLoading: true,
      loadingText: "Submitting...",
    });

    const option = {
      method: "post",
      headers: {
        "Content-type": "application/json",
        authorization,
      },
      body: JSON.stringify({
        password: passwordFormData.password,
        confirmPassword: passwordFormData.confirmPassword,
      }),
    };

    // api call
    fetch(`${apiURL}/password-recovery/password-change`, option)
      .then((res) => res.json())
      .then((data) => {
        // Show toast
        setIsToastVisible(true);

        // If response status is false then show error
        if (!data.success) {
          // set toast message and type
          setToast({
            type: "danger",
            message: data.message,
          });
          return;
        }

        // set toast message and type
        setToast({
          type: "success",
          message: data.message,
        });

        // Redirect to login page after 5 seconds
        setTimeout(() => {
          location.reload(true);
        }, 5000);

        setLoading({
          isLoading: true,
          loadingText: "Redirecting...",
        });
        return;
      })
      .catch((err) => {
        setIsToastVisible(true);
        setToast({
          type: "danger",
          message: "Something went wrong",
        });
      });
  };

  // Function to add timer for resend otp
  const setTimeOutToResendOtp = () => {
    // Set timer to resend otp
    setOtpResendTimer(90);
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

  return (
    <>
      {isToastVisible && (
        <Toast
          toastType={toast.type}
          message={toast.message}
          setIsToastVisible={setIsToastVisible}
        />
      )}

      {/* Display email box for request otp  */}
      {!isOtpVerify && (
        <>
          {!isOtpSend && (
            <>
              <h1 className="text-2xl font-bold text-center">Password Reset</h1>
              <form
                onSubmit={handleRequestOtp}
                className="flex flex-col w-full gap-4 my-4"
              >
                <InputBox
                  name={"email"}
                  value={email}
                  onChangeHandler={onChangeHandler}
                  placeholder={"Enter your Email"}
                  type="email"
                  icon={faUser}
                  isRequired={true}
                />
                <SubmitButton
                  text={"Get Otp"}
                  loading={loading.isLoading}
                  loadingText={loading.loadingText}
                />
              </form>
            </>
          )}

          {/* Display OTP box after sending otp  */}
          {isOtpSend && (
            <div className="p-3">
              <h3 className="text-center text-lg my-3">
                Enter OTP sent on your Email
              </h3>
              <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
                <OtpBox otp={otp} setOtp={setOtp} />

                {/* Resend otp button */}
                <div>
                  <p className="text-center">
                    Resend otp{" "}
                    {isOtpResendTimerActive ? (
                      <span>in {otpResendTimer}s</span>
                    ) : (
                      <span
                        className="text-primary-regular hover:underline cursor-pointer"
                        onClick={resendOtp}
                      >
                        click here
                      </span>
                    )}
                  </p>
                </div>
                <div className="w-full">
                  <SubmitButton
                    loading={loading.isLoading}
                    text={"Verify"}
                    loadingText={loading.loadingText}
                  />
                </div>
              </form>
            </div>
          )}
        </>
      )}

      {/* Display create new password box  */}
      {isOtpVerify && (
        <>
          <h2 className="text-xl my-4 font-medium">Create new password</h2>
          <form className="flex flex-col gap-4 mb-4 " onSubmit={newPasswordSet}>
            <div className="grow flex-col flex">
              <label htmlFor="password">
                Password<span className="text-red-600">*</span>
              </label>
              <PasswordInputBox
                name="password"
                placeholder="Use 8 or more characters with a mix of letters, numbers & symbols"
                type="password"
                id="password"
                value={passwordFormData.password}
                Required={true}
                onChangeHandler={passwordFormChangeHandler}
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
                value={passwordFormData.confirmPassword}
                Required={true}
                onChangeHandler={passwordFormChangeHandler}
              />
            </div>

            {/* Submit button  */}
            <div className="w-full">
              <SubmitButton
                loading={loading.isLoading}
                text={"Submit"}
                loadingText={loading.loadingText}
              />
            </div>
          </form>
        </>
      )}
    </>
  );
};

ResetPasswordForm.propTypes = {
  role: PropTypes.string.isRequired, // Role define in which database table we have to check email
};

export default ResetPasswordForm;