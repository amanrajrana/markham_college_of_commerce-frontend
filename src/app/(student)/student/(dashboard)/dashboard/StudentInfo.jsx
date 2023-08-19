"use client";
import Image from "next/image";
import AVATAR from "../user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGraduationCap,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import studentContext from "@/contexts/student/studentContext";

const StudentInfo = () => {
  const studentDetails = useContext(studentContext).studentDetails;

  return (
    <div className="border-t-4 border-t-blue-900 rounded-md bg-secondary py-4 px-2 shadow-md">
      {/* ======= STUDENT AVATAR ======= */}
      <Image
        className="border-blue-800 border-2 rounded-full mx-auto p-1"
        src={AVATAR}
        height={150}
        width={150}
        alt="User Avatar"
      />
      <h2 className="text-center my-4 font-bold text-lg w-full">
        {studentDetails?.name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 my-4 font-semibold">
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faUser} />
          Name
        </span>

        <span className="col-span-3">{studentDetails?.name}</span>

        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
          Email
        </span>

        <span className="col-span-3">{studentDetails?.email}</span>

        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faPhone} />
          Phone
        </span>

        <span className="col-span-3">{studentDetails?.phone}</span>
        <span className="text-blue-900 col-span-2">
          <FontAwesomeIcon className="mr-2" icon={faGraduationCap} />
          Program
        </span>

        <span className="col-span-3">{studentDetails?.program}</span>
      </div>
    </div>
  );
};

export default StudentInfo;
