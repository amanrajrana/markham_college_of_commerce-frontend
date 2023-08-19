import {
  faBars,
  faBell,
  faEnvelope,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import AVATAR from "../user.png";
import PropTypes from "prop-types";

const Header = ({ setIsMenuOpen }) => {
  return (
    <header className="flex justify-between items-center bg-primary-regular text-white shadow-md">
      <div
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
        className="h-full flex items-center justify-center px-4 hover:bg-primary-dark cursor-pointer"
      >
        <FontAwesomeIcon className="text-3xl" icon={faBars} />
      </div>

      {/* ======= Right Side container ======= */}
      <div className="flex items-center h-full">
        {/* ======= Message Notification ======= */}
        <div className="h-full p-5 hover:bg-primary-dark cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        {/* ======= Message Notification ======= */}
        <div className="h-full p-5 hover:bg-primary-dark cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faBell} />
        </div>

        {/* ======= Message Notification ======= */}
        <div className="h-full p-5 hover:bg-primary-dark cursor-pointer flex items-center">
          <FontAwesomeIcon icon={faFlag} />
        </div>

        {/* ======= Student Avatar ======= */}
        <div className="flex gap-2 items-center px-4 h-full hover:bg-primary-dark cursor-pointer">
          <Image
            src={AVATAR}
            height={35}
            width={35}
            alt="User Avatar"
            className="rounded-full border-2 border-white"
          />
          <span className="hidden sm:inline-block">Admin</span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
};

export default Header;
