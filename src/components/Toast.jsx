"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import styles from "@components/styles.module.css";
import {
  faCheck,
  faExclamation,
  faInfo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const iconColorMapping = {
  success: { icon: faCheck, color: "green" },
  danger: { icon: faXmark, color: "red" },
  warning: { icon: faExclamation, color: "yellow" },
  info: { icon: faInfo, color: "blue" },
  default: { icon: faCheck, color: "gray" },
};

const Toast = ({ toastType, message, setIsToastVisible }) => {
  const { icon, color } =
    iconColorMapping[toastType] || iconColorMapping.default;

  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    const hideToast = () => {
      setIsToastVisible(false);
    };

    const timeoutId = setTimeout(() => {
      hideToast();
    }, 5100); //5000ms for waiting and 100ms for animation delay

    hideTimeoutRef.current = timeoutId;

    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [toastType, setIsToastVisible]);

  const handleToastClose = () => {
    setIsToastVisible(false);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
  };

  return (
    <div
      className={`${styles.horizontalShaking} fixed top-4 lg:top-8 lg:right-8 w-80 max-w-full shadow-2xl shadow-black`}
    >
      <div className={`bg-${color}-300 p-3`}>
        <div
          className="absolute right-0 z-10 top-0 w-6 h-6 flex justify-center items-center cursor-pointer font-semibold text-lg"
          onClick={handleToastClose}
        >
          x
        </div>
        <div className="grid grid-cols-12 items-center">
          <div
            className={`flex items-center justify-center bg-${color}-700 rounded-full w-full h-6`}
          >
            <FontAwesomeIcon className="text-sm text-white" icon={icon} />
          </div>
          <p className="col-span-11 px-1.5">{message}</p>
        </div>
      </div>
      <div
        className={`w-full h-1.5 bg-${color}-700 ${styles.toastTimingAnimation}`}
      ></div>
      {/* Don't Delete this code this is just dummy code to load the tailwind classes  */}
      <div className="hidden">
        <span className="bg-red-300 text-red-700"></span>
        <span className="bg-green-300 text-green-700"></span>
        <span className="bg-blue-300 text-blue-700"></span>
        <span className="bg-yellow-300 text-yellow-700 "></span>
        <span className=" bg-red-700"></span>
        <span className=" bg-green-700"></span>
        <span className="bg-blue-700"></span>
        <span className="bg-yellow-700"></span>
      </div>
      {/* Dummy div end */}
    </div>
  );
};

Toast.propTypes = {
  toastType: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  setIsToastVisible: PropTypes.func.isRequired,
};

export default Toast;
