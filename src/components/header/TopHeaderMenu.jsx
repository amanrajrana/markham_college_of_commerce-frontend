import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "../Button";

const TopHeaderMenu = () => {
  return (
    <div className="w-full py-2 px-4 bg-blue-900">
      <div className="max-w-screen-xl w-full mx-auto items-center flex justify-between  flex-wrap text-white font-gilroy font-medium">
        <h2 className="text-xs">Welcome to Markham College of Commerce</h2>
        <div className="hidden md:block">
          <a
            className="mx-3"
            href="http://www.facebook.com/mcchzb"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            className="mx-3"
            href="http://www.twitter.com/mcchzb"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <span>
            <Button href={'#'} text={'Official'}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderMenu;
