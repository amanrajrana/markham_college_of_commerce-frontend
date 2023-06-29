"use client";

import {
  faAngleDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "../Button";
import SocialMediaLink from "../HomeComponents/hero/SocialMediaLink";
import { useState } from "react";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const navbarVisibility = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <>
      <div className="top-2 fixed text-white text-3xl right-3 md:hidden z-10">
        <FontAwesomeIcon
          onClick={navbarVisibility}
          icon={navbarVisible ? faXmark : faBars}
        />
      </div>
      <nav
        className={`
        ${navbarVisible ? "top-0 visible" : "top-[-120%] invisible"} 
          duration-500 p-10 bg-blue-950 fixed right-0 min-h-screen z-[5] w-full md:visible md:block md:min-h-fit md:h-auto md:static md:p-3 md:bg-primary overflow-y-auto`}
      >
        <ul className="flex flex-col md:flex-row md:justify-between  gap-3 max-w-screen-xl  mx-auto text-white">
          <li className="">
            <Link className="flex items-center gap-1" href={"#"}>
              Home
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-1" href={"#"}>
              About Us
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-1" href={"#"}>
              Programs
              <FontAwesomeIcon icon={faAngleDown} />
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-1" href={"#"}>
              Facilities
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-1" href={"#"}>
              Admission
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-1" href={"#"}>
              Notice
              <FontAwesomeIcon icon={faAngleDown} />
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-1" href={"#"}>
              Campus
              <FontAwesomeIcon icon={faAngleDown} />
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-1" href={"#"}>
              Gallery
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-1" href={"#"}>
              Feedback
              <FontAwesomeIcon icon={faAngleDown} />
            </Link>
          </li>
        </ul>
        <div className="md:hidden mt-7 flex justify-center w-full flex-col items-center gap-5">
          <Button text={"Log In"} href={"#"} />
          <div className="text-white
          ">
            <SocialMediaLink />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
