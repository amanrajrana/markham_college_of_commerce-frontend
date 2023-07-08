const SubmitButton = ({ text }) => {
  return (
    <button
      className="bg-blue-900 w-full duration-500 rounded-sm px-4 py-2 uppercase text-white"
      type="submit"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
