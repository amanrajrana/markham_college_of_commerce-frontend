import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ResetPasswordForm = () => {
  return (
    <>
    <h1 className="text-2xl font-bold text-center">Password Reset</h1>
      <form className="flex flex-col w-full gap-4 my-4">
      <div className="border rounded-sm   flex">
          <FontAwesomeIcon className="self-center p-3" icon={faUser} />
          <input
            className="py-2 px-3 bg-gray-100 flex-1 w-10/12"
            type="email"
            name="email"
            placeholder="Enter your email or Phone Number"
          />
        </div>
        <button
          className="bg-blue-900 rounded-sm px-4 py-2 uppercase text-white"
          type="submit"
        >
          Get OTP
        </button>
      </form>
    </>
  )
}

export default ResetPasswordForm