import PropTypes from "prop-types";

const OtpBox = ({ otp, setOtp }) => {
  return (
    <div className="mx-auto max-w-full w-fit flex flex-col">
      <input
        type="text"
        name="otp"
        className="p-2 pl-6 text-center tracking-[1rem] max-w-[12rem] text-lg font-semibold border rounded-sm outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
        placeholder="#####"
        required
        minLength={5}
        maxLength={5}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
    </div>
  );
};

OtpBox.propTypes = {
  otp: PropTypes.string.isRequired,
  setOtp: PropTypes.func.isRequired,
};

export default OtpBox;
