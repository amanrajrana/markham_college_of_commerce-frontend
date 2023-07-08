"use client";
import { faEye, faEyeSlash, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PropTypes from 'prop-types'


const PasswordInputBox = ({name, placeholder, value, id, onChangeHandler }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="border rounded-sm flex overflow-hidden">
      <FontAwesomeIcon className="self-center p-3 text-blue-900" icon={faKey} />
      <input
        className="py-2 px-3 bg-gray-100 flex-1 w-10/12"
        type={isPasswordVisible ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        id={id}
      />
      <FontAwesomeIcon
        className="self-center p-3 bg-gray-100 cursor-pointer text-blue-900"
        icon={isPasswordVisible ? faEyeSlash : faEye}
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      />
    </div>
  );
};


PasswordInputBox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
}



export default PasswordInputBox;
