"use client";
import {
  faCheck,
  faExclamation,
  faInfo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import styles from "@components/styles.module.css";

const Toast = ({ toastType, message, setIsToastVisible }) => {
  const [color, setColor] = useState("green");
  const [icon, setIcon] = useState(faCheck);

  function hideToast() {
    setTimeout(() => {
      setIsToastVisible(false);
    }, 5100); //5000ms for waiting and 100ms for animation delay
  }

  useEffect(() => {
    hideToast();
    switch (toastType) {
      case "success":
        setIcon(faCheck);
        setColor("green");
        break;

      case "danger":
        setIcon(faXmark);
        setColor("red");
        break;

      case "warning":
        setIcon(faExclamation);
        setColor("yellow");
        break;

      case "info":
        setIcon(faInfo);
        setColor("blue");
        break;

      default:
        setIcon(faCheck);
        setColor("gray");
        break;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastType]);

  return (
    <>
      <div
        className={`${styles.horizontalShaking} fixed top-8 lg:right-8 w-80 max-w-full shadow-2xl shadow-black`}
      >
        <div className={`bg-${color}-300 p-3`}>
          <div
            className="absolute right-0 z-10 top-0 w-6 h-6 flex justify-center items-center cursor-pointer font-semibold text-lg"
            onClick={() => setIsToastVisible(false)}
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
      </div>
      {/* Don't Delete this code this is just dummy code to load the tailwind classes  */}
      <div className="hidden">
        <span className="bg-red-300 text-red-700 bg-red-700"></span>
        <span className="bg-green-300 text-green-700 bg-green-700"></span>
        <span className="bg-blue-300 text-blue-700 bg-blue-700"></span>
        <span className="bg-yellow-300 text-yellow-700  bg-yellow-700"></span>
      </div>
      {/* Dummy div end */}
    </>
  );
};

Toast.propTypes = {
  toastType: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  setIsToastVisible: PropTypes.func.isRequired,
};

export default Toast;
