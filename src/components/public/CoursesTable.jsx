import Button from "../Button";
import PropTypes from "prop-types";

const CoursesTable = ({ courses }) => {
  return (
    <div className="w-full text-base">
      <table className="w-full min-w-max">
        <thead>
          <tr className="bg-primary-regular text-white">
            <th className="border border-gray-300 px-4 py-2">Streams</th>
            <th className="border border-gray-300 px-4 py-2">Mode</th>
            <th className="border border-gray-300 px-4 py-2">Duration</th>
            <th className="border border-gray-300 px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {/* ===== Art Courses ===== */}
          {courses.map((course, index) => (
            <tr
              className={`${index % 2 === 1 ? "bg-gray-200" : ""}`}
              key={index}
            >
              <td className="border border-gray-300 px-4 py-2">
                {course.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Full Time & Regular
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {course.duration}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center">
                <Button href={course.path} text={"Click Here"} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CoursesTable.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CoursesTable;
