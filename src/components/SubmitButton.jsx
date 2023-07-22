import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.css";
import PropTypes from 'prop-types'

const SubmitButton = ({ loading, loadingText, text }) => {
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
          <span className="mx-2 capitalize">{loadingText || "Loading..."}</span>
        </>
      ) : (
        text
      )}
    </button>
  );
};


SubmitButton.propTypes = {
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default React.memo(SubmitButton);
