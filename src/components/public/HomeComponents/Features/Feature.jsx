import {
  faBook,
  faPeopleGroup,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Feature = ({ iconName, heading, text, link }) => {
  let icon = null;

  switch (iconName) {
    case "faBook":
      icon = faBook;
      break;

    case "faPeopleGroup":
      icon = faPeopleGroup;
      break;

    case "faTrophy":
      icon = faTrophy;
      break;
    default:
      icon = faBook;
  }
  return (
    <div className="flex flex-col items-start gap-4 p-3 hover:scale-105 duration-500">
      <FontAwesomeIcon
        className="border border-primary text-xl p-3 text-primary hover:bg-primary hover:text-white duration-500"
        icon={icon}
      />
      <div>
        <h3 className="text-xl font-semibold">{heading}</h3>
        <div className="h-0.5 bg-primary rounded-sm max-w-[5rem]"></div>
      </div>

      <p className="text-justify">{text}</p>
      <Link
        href={link}
        className="border duration-500 ease-linear border-primary py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
      >
        Read More...
      </Link>
    </div>
  );
};

export default Feature;
