/**
 * @description This module is used to check password policy. i.e password length, password strength etc and also check password and confirm password should be same.
 * @function
 * @name checkPasswordPolicy
 * @param {string} password - Password to be checked.
 * @param {string} confirmPassword {option} - Confirm password to be checked.
 * @returns {object} - Returns object with status and message.
 *
 */

const checkPasswordPolicy = (password, confirmPassword) => {
  const passwordStrength = password.match(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
  );

  // Check password length
  if (password.length < 8) {
    return {
      status: false,
      message: "Password must be at least 8 characters long.",
    };
  }

  // Check password strength
  if (!passwordStrength) {
    return {
      status: false,
      message:
        "Enter a strong password. i.e. combination of uppercase, lowercase, number and special character.",
    };
  }

  // Check password and confirm password
  if (confirmPassword) {
    if (password !== confirmPassword) {
      return {
        status: false,
        message: "confirm password not matched!",
      };
    }
  }

  // Return true if all conditions are satisfied
  return {
    status: true,
    message: "Password is valid.",
  };
};

module.exports = { checkPasswordPolicy };
