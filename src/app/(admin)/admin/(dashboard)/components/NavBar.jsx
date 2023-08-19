import {
  faArrowRightFromBracket,
  faCircleExclamation,
  faDatabase,
  faGear,
  faSquarePen,
  faTable,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import PropTypes from "prop-types";

const NavBar = ({ isMenuOpen }) => {
  const NAV_ITEMS = [
    {
      name: "DashBoard",
      icon: faTable,
      link: "/admin/dashboard",
    },
    {
      name: "Received Application ",
      icon: faUniversity,
      link: "/admin/ReceivedApplication",
    },
    {
      name: "Pending Application",
      icon: faDatabase,
      link: "/admin/PendingApplication",
    },
    {
      name: "Notice",
      icon: faCircleExclamation,
      link: "/admin/notice",
    },
    {
      name: "Change Request",
      icon: faSquarePen,
      link: "/admin/changeRequest",
    },
    {
      name: "Setting",
      icon: faGear,
      link: "/admin/Setting",
    },
    {
      name: "Logout",
      icon: faArrowRightFromBracket,
      link: "/admin/Logout",
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
            <Link className="flex items-center gap-4" href={item.link}>
              <FontAwesomeIcon
                className="text-xl font-light"
                icon={item.icon}
              />
              {isMenuOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default NavBar;
