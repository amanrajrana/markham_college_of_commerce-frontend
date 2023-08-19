import Link from "next/link";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="text-center bg-black text-white w-full h-screen flex flex-col gap-y-8 justify-center items-center text-2xl tracking-widest">
      <div className="text-7xl font-bold tracking-widest">404</div>
      <div>
        We are under development!
        <br />
        come back soon :{")"}
      </div>
      <Link className="text-xl text-center" href="/">
        <FontAwesomeIcon className="text-2xl mx-4" icon={faHome} /> Return home
      </Link>
    </div>
  );
};

export default NotFound;
