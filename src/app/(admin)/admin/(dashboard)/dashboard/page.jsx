import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const StudentDashboard = () => {
  return (
    <div className="text-center bg-black text-white w-full h-screen flex flex-col gap-y-12 justify-center items-center text-2xl tracking-widest">
      Under development!
      <br />
      come back soon :{")"}
      <Link href={"/"}>
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
    </div>
  );
};

export default StudentDashboard;
