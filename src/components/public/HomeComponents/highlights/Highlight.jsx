import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";

const Highlight = ({ icon, heading, text }) => {
  return (
    <div
      className={`${styles.flipContainer} animation-on-scroll cursor-context-menu flex gap-4`}
    >
      <div className="flex items-center justify-center h-fit rounded-full bg-secondary p-4">
        <FontAwesomeIcon
          className={`${styles.flipIcon} text-4xl text-blue-900 w-10 h-10`}
          icon={icon}
        />
      </div>
      <div>
        <h3 className="font-semibold text-sm tracking-widest">{heading}</h3>
        <p className="text-slate-300">{text}</p>
      </div>
    </div>
  );
};

export default Highlight;
