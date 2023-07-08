"use client";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputBox = ({
  name,
  type,
  placeholder,
  value,
  onChangeHandler,
  icon,
  id,
  isRequired,
}) => {
  return (
    <div className="border rounded-sm overflow-hidden flex">
      {icon && (
        <FontAwesomeIcon
          className="self-center p-3 text-blue-900"
          icon={icon}
        />
      )}
      <input
        id={id}
        className="py-2 px-3 bg-gray-100 flex-1 w-10/12"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        required={isRequired}
      />
    </div>
  );
};

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default InputBox;
