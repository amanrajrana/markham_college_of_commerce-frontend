"use client";

import {
  faAngleDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "@components/Button";
import SocialMediaLink from "@components/SocialMediaLink";
import styles from "./styles.module.css";
import DropDownItem from "./DropDownItem";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV__ITEMS } from "@/app/constant/nav_item";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setNavbarVisible(false);
  }, [pathName]);

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
          duration-500 p-10 bg-blue-950 fixed right-0 min-h-screen z-[5] w-full md:visible md:block md:min-h-fit md:h-auto md:static md:p-3 md:bg-primary-regular overflow-y-auto`}
      >
        <ul className="flex flex-col md:flex-row md:justify-between  gap-4 max-w-screen-xl  mx-auto text-white">
          {/* ==== Map on NAV__ITEMS ====  */}
          {NAV__ITEMS.map((ITEM, index) => (
            <li key={index} className={`${styles.dropdown} duration-500`}>
              <Link
                className="flex items-center gap-1 md:hover:underline"
                href={ITEM?.path || "#"}
              >
                {ITEM.name}

                {/* If ITEM is dropdown display a angleDown icon */}
                {ITEM.isDropDown && <FontAwesomeIcon icon={faAngleDown} />}
              </Link>

              {/* {If ITEM is DropDown then display <DropDownItem /> components} */}
              {ITEM.isDropDown && (
                <DropDownItem dropDownItemsList={ITEM.dropDownItems} />
              )}
            </li>
          ))}
        </ul>

        {/* ==== This div display only in small screen ===== */}
        <div className="md:hidden mt-7 flex justify-center w-full flex-col items-center gap-5">
          <Button text={"Log In"} href={"/student/login"} />
          <div className="text-white">
            <SocialMediaLink />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
