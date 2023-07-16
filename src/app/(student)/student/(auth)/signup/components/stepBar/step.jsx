
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Step = ({icon, text}) => {
  return (
    <div className="flex items-center flex-col">
      <FontAwesomeIcon
        className={`p-3 bg-blue-700 rounded-full text-white border-blue-950 border-2`}
        icon={icon}
      />
      <p className="max-w-[5rem] text-center">{text}</p>
    </div>
  );
};

export default Step;
