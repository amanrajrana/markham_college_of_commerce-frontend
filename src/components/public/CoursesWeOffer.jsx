import {
  faBookOpen,
  faBusinessTime,
  faCube,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CoursesWeOffer = () => {
  return (
    <div className="max-w-full overflow-hidden">
      <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
        <h5 className="font-semibold text-2xl border-b border-primary-regular px-4 py-2">
          <FontAwesomeIcon
            className="text-2xl mx-2 text-primary-regular"
            icon={faFlask}
          />{" "}
          Science
        </h5>

        <div className="w-full">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-primary-regular text-white">
                <th className="border border-gray-300 px-4 py-2">Streams</th>
                <th className="border border-gray-300 px-4 py-2">Mode</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Edibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Computer Application
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  3 Years (6 Semesters)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  10+2 with 50%
                </td>
              </tr>

              <tr className="bg-gray-200">
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Science (Hons)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  4 Years (8 Semesters) <br />
                  <span className="text-xs text-center block">
                    (FYUGP as NEP 2020)
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Science (Gen)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  4 Years (8 Semesters) <br />
                  <span className="text-xs text-center block">
                    (FYUGP as NEP 2020)
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
        <h5 className="font-semibold text-2xl border-b border-primary-regular px-4 py-2">
          <FontAwesomeIcon
            className="text-2xl mx-2 text-primary-regular"
            icon={faBusinessTime}
          />{" "}
          Commerce
        </h5>

        <div className="w-full">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-primary-regular text-white">
                <th className="border border-gray-300 px-4 py-2">Streams</th>
                <th className="border border-gray-300 px-4 py-2">Mode</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Edibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Commerce (B.Com)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  4 Years (8 Semesters) <br />
                  <span className="text-xs text-center block">
                    (FYUGP as NEP 2020)
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== Art Stream ===== */}
      <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
        <h5 className="font-semibold text-2xl border-b border-primary-regular px-4 py-2">
          <FontAwesomeIcon
            className="text-2xl mx-2 text-primary-regular"
            icon={faBookOpen}
          />{" "}
          Arts
        </h5>

        <div className="w-full">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-primary-regular text-white">
                <th className="border border-gray-300 px-4 py-2">Streams</th>
                <th className="border border-gray-300 px-4 py-2">Mode</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Edibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Arts (Hons)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  4 Years (8 Semesters) <br />
                  <span className="text-xs text-center block">
                    (FYUGP as NEP 2020)
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Art (Gen)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  4 Years (8 Semesters) <br />
                  <span className="text-xs text-center block">
                    (FYUGP as NEP 2020)
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== Vocational Courses ===== */}
      <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
        <h5 className="font-semibold text-2xl border-b border-primary-regular px-4 py-2">
          <FontAwesomeIcon
            className="text-2xl mx-2 text-primary-regular"
            icon={faCube}
          />{" "}
          Vocational
        </h5>

        <div className="w-full">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-primary-regular text-white">
                <th className="border border-gray-300 px-4 py-2">Streams</th>
                <th className="border border-gray-300 px-4 py-2">Mode</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Edibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Computer Application (BCA)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  3 Years (6 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Business Administration (BBA)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  3 Years (6 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Medical Laboratory Technology (BMLT)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  3 Years (6 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Journalism and Mass Communication (BJMC)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  3 Years (6 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoursesWeOffer;
