"use client";

import {
  faArrowRightFromBracket,
  faDatabase,
  faGear,
  faIndianRupeeSign,
  faSquarePen,
  faTable,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

const NavBar = ({ isMenuOpen }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authorization");
    sessionStorage.removeItem("authorization");
    router.replace("/student/login");
  };

  const NAV_ITEMS = [
    {
      name: "DashBoard",
      icon: faTable,
      link: "/",
    },
    {
      name: "Application Form",
      icon: faUniversity,
      link: "/",
    },
    {
      name: "Submitted Application",
      icon: faDatabase,
      link: "/",
    },
    {
      name: "Payment",
      icon: faIndianRupeeSign,
      link: "/",
    },
    {
      name: "Change Request",
      icon: faSquarePen,
      link: "/",
    },
    {
      name: "Setting",
      icon: faGear,
      link: "/",
    },
  ];

  return (
    <nav className=" max-w-full bg-blue-900 h-full overflow-y-auto">
      <ul className="flex flex-col gap-4 p-4 text-white">
        {NAV_ITEMS.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-4 p-2 rounded-md hover:bg-blue-800 cursor-pointer font-medium duration-500 `}
          >
            <FontAwesomeIcon className="text-xl font-light" icon={item.icon} />
            {isMenuOpen && <span>{item.name}</span>}
          </li>
        ))}
        <li
          onClick={handleLogout}
          className={`flex items-center gap-4 p-2 rounded-md hover:bg-blue-800 cursor-pointer font-medium duration-500 `}
        >
          <FontAwesomeIcon
            className="text-xl font-light"
            icon={faArrowRightFromBracket}
          />
          {isMenuOpen && <span>Logout</span>}
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default NavBar;
