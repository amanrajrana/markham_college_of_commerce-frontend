import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Notice = ({
  category,
  title,
  date,
  description,
  downloadLink,
  detailsLink,
}) => {
  return (
    <div>
      {/* category */}
      <p className="text-primary-regular rounded-full text-xs">{category}</p>
      <h4 className="font-medium">{title}</h4>
      <p className="flex items-center gap-2 text-gray-700">
        <FontAwesomeIcon icon={faCalendarDays} />
        <span>{date}</span>
        <span>|</span>
        <a
          className="bg-blue-700 duration-500 hover:bg-blue-900 py-1 px-2 text-white rounded-full text-xs"
          href={downloadLink}
        >
          Download
        </a>
      </p>
      <p className="text-gray-700">{description}</p>
      <Link className="text-blue-800" href={detailsLink}>
        Read More &rarr;
      </Link>
    </div>
  );
};

export default Notice;
