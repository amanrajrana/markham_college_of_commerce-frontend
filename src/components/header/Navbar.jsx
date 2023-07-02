"use client";

import {
  faAngleDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "../Button";
import SocialMediaLink from "../SocialMediaLink";
import { useState } from "react";
import styles from "./styles.module.css";
import DropDownItem from "./DropDownItem";
import React from "react";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  //TODO: Add path
  const NAV__ITEMS = [
    {
      id: 0,
      isDropDown: false,
      name: "Home",
      path: "#",
    },
    {
      id: 1,
      isDropDown: false,
      name: "About Us",
      path: "#",
    },
    {
      id: 2,
      isDropDown: true,
      name: "Programs",
      dropDownItems: [
        { id: 2.1, name: "UG Programs", path: "#" },
        { id: 2.2, name: "PG Programs", path: "#" },
        { id: 2.3, name: "Vocational Programs", path: "#" },
      ],
    },
    {
      id: 3,
      isDropDown: false,
      name: "Facilities",
      path: "#",
    },
    {
      id: 4,
      isDropDown: false,
      name: "Admission",
      path: "#",
    },
    {
      id: 5,
      isDropDown: true,
      name: "Notice",
      dropDownItems: [
        { id: 5.1, name: "Admission", path: "#" },
        { id: 5.2, name: "Exam", path: "#" },
        { id: 5.3, name: "Class", path: "#" },
        { id: 5.4, name: "Event", path: "#" },
        { id: 5.5, name: "Programs", path: "#" },
      ],
    },
    {
      id: 6,
      isDropDown: true,
      name: "Campus",
      dropDownItems: [
        { id: 6.1, name: "NCC", path: "#" },
        { id: 6.2, name: "Exam", path: "#" },
        { id: 6.3, name: "Class", path: "#" },
        { id: 6.4, name: "Event", path: "#" },
      ],
    },
    {
      id: 7,
      isDropDown: false,
      name: "Gallery",
      path: "#",
    },
    {
      id: 9,
      isDropDown: true,
      name: "Feedback",
      dropDownItems: [
        { id: 9.1, name: "Student", path: "#" },
        { id: 9.2, name: "College", path: "#" },
        { id: 9.3, name: "Class", path: "#" },
        { id: 9.4, name: "Event", path: "#" },
      ],
    },
  ];

  return (
    <>
      <div className="top-2 fixed text-white text-3xl right-3 md:hidden z-10">
        <FontAwesomeIcon
          onClick={() => setNavbarVisible(!navbarVisible)}
          icon={navbarVisible ? faXmark : faBars}
        />
      </div>
      <nav
        className={`
        ${navbarVisible ? "top-0 visible" : "top-[-120%] invisible"} 
          duration-500 p-10 bg-blue-950 fixed right-0 min-h-screen z-[5] w-full md:visible md:block md:min-h-fit md:h-auto md:static md:p-3 md:bg-primary overflow-y-auto`}
      >
        <ul className="flex flex-col md:flex-row md:justify-between  gap-3 max-w-screen-xl  mx-auto text-white">
          {/* ==== Map on NAV__ITEMS ====  */}
          {NAV__ITEMS.map((ITEM) => {
            return (
              <li key={ITEM.id} className={`${styles.dropdown} duration-500`}>
                <Link
                  className="flex items-center gap-1 hover:underline"
                  href={"#"}
                >
                  {ITEM.name}

                  {/* If ITEM.isDropDown is true then display Angle Down icon  */}
                  {ITEM.isDropDown && <FontAwesomeIcon icon={faAngleDown} />}
                </Link>

                {/* {If ITEM.isDropDown is true then display <DropDownItem /> components} */}
                {ITEM.isDropDown && (
                  <DropDownItem dropDownItemsList={ITEM.dropDownItems} />
                )}
              </li>
            );
          })}
        </ul>

        {/* ==== This div display only in small screen ===== */}
        <div className="md:hidden mt-7 flex justify-center w-full flex-col items-center gap-5">
          <Button text={"Log In"} href={"#"} />
          <div className="text-white">
            <SocialMediaLink />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
