"use client";
import "@/app/globals.css";
import InputBox from "@/components/InputBox";
import PasswordInputBox from "@/components/PasswordInputBox";
import SubmitButton from "@/components/SubmitButton";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [program, setProgram] = useState("default");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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

  return (
    <div className="my-4 p-3">
      <h3 className="text-center text-xl uppercase my-3">Sign Up Details</h3>
      <form className="flex flex-col gap-4" action="">
        <div className="w-full flex-col flex gap-2">
          <label htmlFor="name">
            Name <span className="text-red-600">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            <InputBox
              name="firstName"
              placeholder="First Name*"
              type="text"
              value={firstName}
              onChangeHandler={onChangeHandler}
              isRequired={true}
            />

            <InputBox
              name="lastName"
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChangeHandler={onChangeHandler}
              isRequired={false}
            />
          </div>
        </div>
        <div className="w-full flex-col flex">
          <label htmlFor="email">
            Email <span className="text-red-600">*</span>
          </label>
          <InputBox
            name="email"
            placeholder="email@example.com"
            type="email"
            id="email"
            value={email}
            icon={faEnvelope}
            onChangeHandler={onChangeHandler}
            isRequired={true}
          />
        </div>

        <div className="w-full flex-col flex">
          <label htmlFor="phoneNumber">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <InputBox
            name="phoneNumber"
            placeholder="WhatsApp Number"
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            icon={faWhatsapp}
            onChangeHandler={onChangeHandler}
            isRequired={true}
          />
        </div>

        <div className="grow flex-col flex">
          <label htmlFor="password">
            Password <span className="text-red-600">*</span>
          </label>
          <PasswordInputBox
            name="password"
            placeholder="Use 8 or more characters with a mix of letters, numbers & symbols"
            type="password"
            id="password"
            value={password}
            isRequired={true}
            onChangeHandler={onChangeHandler}
          />
        </div>

        <div className="w-full flex-col flex">
          <label htmlFor="confirmPassword">
            Confirm Password <span className="text-red-600">*</span>
          </label>
          <PasswordInputBox
            name="confirmPassword"
            placeholder="Use 8 or more characters with a mix of letters, numbers & symbols"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            isRequired={true}
            onChangeHandler={onChangeHandler}
          />
        </div>

        <div className="w-full flex-col flex">
          <label htmlFor="program">
            Select Program <span className="text-red-600">*</span>
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
            />
            <label htmlFor="checkBox" className="text-sm max-w-md">
              I agree to receive Phone Calls, WhatsApp, Emails or Messages from
              the college.
            </label>
          </div>
          <div className="my-8 w-full">
            <SubmitButton text={"Sign Up"} />
          </div>
        </div>
      </form>
      <p className="text-center">
        Already Registered?{" "}
        <Link
          className="duration-500 text-primary hover:underline font-medium cursor-pointer"
          href="/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
