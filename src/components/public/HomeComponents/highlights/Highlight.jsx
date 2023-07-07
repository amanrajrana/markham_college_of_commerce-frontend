import {
  faBriefcase,
  faChalkboardTeacher,
  faCogs,
  faGraduationCap,
  faUniversity,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";


const Highlight = ({ iconName, heading, text }) => {
  let icon = null;

  switch (iconName) {
    case "faGraduationCap":
      icon = faGraduationCap;
      break;

    case "faUsers":
      icon = faUsers;
      break;

    case "faCogs":
      icon = faCogs;
      break;

    case "faChalkboardTeacher":
      icon = faChalkboardTeacher;
      break;

    case "faBriefcase":
      icon = faBriefcase;
      break;

    case "faUniversity":
      icon = faUniversity;
      break;

    default:
      icon = faGraduationCap;
  }

  return (
    <div className={`${styles.flipContainer} cursor-context-menu flex gap-4`}>
      <FontAwesomeIcon
        className={`${styles.flipIcon} text-4xl text-blue-900 p-4 rounded-full h-12 w-12 bg-secondary`}
        icon={icon}
      />
      <div>
        <h3 className="font-semibold text-sm tracking-widest">{heading}</h3>
        <p className="text-slate-300">{text}</p>
      </div>
    </div>
  );
};

export default Highlight;
