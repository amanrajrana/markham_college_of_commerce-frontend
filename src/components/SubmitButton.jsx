import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.css";

const SubmitButton = ({ loading, text }) => {
  return (
    <button
      disabled={loading}
      className={`w-full duration-500 rounded-sm px-4 py-2 uppercase text-white bg-blue-900 
      ${
        loading
          ? "bg-opacity-80 cursor-not-allowed"
          : "cursor-pointer bg-opacity-100"
      }`}
      type="submit"
    >
      {loading ? (
        <>
          <FontAwesomeIcon className={styles.spinier} icon={faSpinner} spin />
          <span className="mx-2 capitalize">Loading...</span>
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default React.memo(SubmitButton);
