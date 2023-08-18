import Image from "next/image";
import AVATAR from "../user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const StudentInfo = () => {
  return (
    <div className="border-t-4 border-t-blue-900 rounded-md bg-secondary p-4 shadow-sm">
      {/* ======= STUDENT AVATAR ======= */}
      <Image
        className="border-blue-800 border-2 rounded-full mx-auto p-1"
        src={AVATAR}
        height={150}
        width={150}
        alt="User Avatar"
      />
      <h2 className="text-center my-4 font-bold text-lg w-full">
        Aman Raj Rana
      </h2>
      <div className="grid grid-cols-5 gap-2 my-4 font-semibold">
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mx-2" icon={faUser} />
          Name
        </span>

        <span className="col-span-3">Aman Raj Rana</span>

        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mx-2" icon={faEnvelope} />
          Email
        </span>

        <span className="col-span-3">youremail@gmail.com</span>

        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mx-2" icon={faPhone} />
          Phone
        </span>

        <span className="col-span-3">+91 9955232343</span>
      </div>
    </div>
  );
};

export default StudentInfo;
