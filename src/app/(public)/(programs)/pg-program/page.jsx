import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";
import CoursesTable from "@/components/public/CoursesTable";
import { faBookOpen, faFlask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const metadata = {
  title: "PG Programs - Markham College of Commerce, Hazaribagh",
  description:
    "Welcome to Markham College of Commerce, located in Hazaribagh, Jharkhand. We offer a wide range of UG, PG, and Vocational programs such as BCA, BBA, BJMC, and BMLT. As a government-owned college affiliated with Vinoba Bhave University, we provide quality education for 12th pass students seeking UG degrees and specialized vocational programs. Explore our comprehensive curriculum and dynamic learning environment to shape a successful future.",
};

const PgProgram = () => {
  const COLLEGE_RECOGNITION = [
    {
      title: "Entrance Exam Accepted",
      value: "CUET",
    },
    {
      title: "Degree Issued By:",
      value: "Vinoba Bhave University, Hazaribagh",
    },
    {
      title: "Scholarship",
      value: "E-Kalayan Scholarship, Jharkhand Scholarship",
    },
    {
      title: "Admission Process",
      value:
        "Merit Based through Chancellor Portal, basis of CUET percentile or UG marks",
    },
    {
      title: "Qualification",
      value:
        "Graduation or equivalent in relevant stream with 50% marks from a recognized university",
    },
  ];

  const SCIENCE_COURSES = [
    {
      title: "Mathematics (PG)",
      path: "/pg-program/mathematics",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "Physics (PG)",
      path: "/pg-program/physics",
      duration: "2 Year (4 Semester)",
    },
  ];

  const ART_COURSES = [
    {
      title: "English (PG)",
      path: "/pg-program/english",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "Hindi (PG)",
      path: "/pg-program/hindi",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "Sanskrit (PG)",
      path: "/pg-program/sanskrit",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "Urdu (PG)",
      path: "/pg-program/urdu",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "History (PG)",
      path: "/pg-program/history",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "Political Science (PG)",
      path: "/pg-program/political-science",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "Economics (PG)",
      path: "/pg-program/economics",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "Philosophy (PG)",
      path: "/pg-program/philosophy",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "Geography (PG)",
      path: "/pg-program/geography",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "Psychology (PG)",
      path: "/pg-program/psychology",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "Sociology (PG)",
      path: "/pg-program/sociology",
      duration: "2 Year (4 Semester)",
    },
    {
      title: "Home Science (PG)",
      path: "/pg-program/home-science",
      duration: "2 Year (4 Semester)",
    },
  ];
  return (
    <article className="overflow-hidden sm:text-lg">
      <h1 className="text-xl sm:text-2xl font-bold my-2">
        Postgraduate Courses at Markham College of Commerce, Hazaribagh
      </h1>
      <hr />

      <p className="text-lg mt-4">
        <span className="text-4xl text-primary-regular font-bold">A</span>t
        Markham College of Commerce, we are committed to providing a
        comprehensive education that extends beyond undergraduate programs. Our
        range of Postgraduate (PG) courses is designed to cater to diverse
        academic interests, empowering students to specialize in their chosen
        fields and achieve academic excellence.
      </p>

      <section>
        <div className="grid gap-4 sm:grid-cols-2 my-4 mb-12">
          {COLLEGE_RECOGNITION.map((info, index) => (
            <div className="p-2" key={index}>
              <h4 className="text-xl font-bold text-primary-regular">
                {info.title}
              </h4>
              <p>{info.value}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="my-8">
        <Heading3 headingText={"Diverse PG Courses"} />
        <p className="my-4">
          Our diverse range of PG courses covers a wide spectrum of subjects,
          allowing students to pursue their academic passions and excel in their
          chosen disciplines. Whether you&lsquo;re inclined towards science,
          arts, or humanities, we offer programs tailored to your interests and
          career aspirations.
        </p>
      </section>

      {/* // Courses We Offer */}
      <Heading2 headingText={"Master Courses We Offer"} />
      <div className="max-w-full overflow-hidden">
        {/* ===== Science Stream ===== */}
        <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
          <div className="px-4 py-2">
            <h3 className="font-semibold text-2xl ">
              <FontAwesomeIcon
                className="text-2xl mx-2 text-primary-regular"
                icon={faFlask}
              />{" "}
              Science (M.Sc.)
            </h3>
            <p className="text-slate-600 mb-4">
              For those with an affinity for scientific exploration, we offer
              the following PG courses:
            </p>
          </div>
          <CoursesTable courses={SCIENCE_COURSES} />
        </div>

        <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
          <div className="px-4 py-4">
            <h3 className="font-semibold text-2xl ">
              <FontAwesomeIcon
                className="text-2xl mx-2 text-primary-regular"
                icon={faBookOpen}
              />{" "}
              Arts (M.A.)
            </h3>
            <p className="text-slate-600 mb-4">
              PG art courses provides a platform for creative expression and
              academic exploration:
            </p>
          </div>

          <CoursesTable courses={ART_COURSES} />
        </div>
      </div>
      {/* ===== End of Courses We Offer ===== */}

      <Heading3 headingText={"Recognition and Accreditation"} />
      <ul className="list-disc list-inside ml-8 my-4 gap-4 grid text-lg">
        <li>
          <span className="font-bold">Entrance Exam Accepted:</span> We accept
          the Common University Entrance Test (CUET) for admissions into our PG
          courses.
        </li>
        <li>
          <span className="font-bold">Degree Issued By:</span> Our PG courses
          are affiliated with Vinoba Bhave University, Hazaribagh, ensuring a
          recognized and valuable qualification.
        </li>
        <li>
          <span className="font-bold">Scholarship Opportunities:</span> Eligible
          students can avail themselves of scholarships such as the E-Kalayan
          Scholarship and Jharkhand Scholarship, providing financial support for
          their education.
        </li>
        <li>
          <span className="font-bold">Admission Process:</span> Admission is
          merit-based, determined through the Chancellor Portal.
          Students&lsquo;s CUET percentiles or their undergraduate marks play a
          pivotal role in the selection process.
        </li>
        <li>
          <span className="font-bold">Qualification Requirements:</span> To be
          eligible for our PG courses, candidates should hold a graduation
          degree or its equivalent in a relevant stream with a minimum of 50%
          marks from a recognized university
        </li>
      </ul>
      <section className="my-8">
        <Heading3 headingText={"Empowering Your Academic Journey"} />
        <p className="my-4">
          Markham College of Commerce is dedicated to nurturing scholars who are
          not only well-versed in their fields but also equipped with the
          critical thinking skills and ethical values necessary for a holistic
          education. Our PG courses combine rigorous academic training with
          hands-on experiences, preparing students to become leaders and experts
          in their chosen disciplines.
        </p>
        <p className="my-4">
          With a commitment to academic excellence, renowned faculty, and a
          supportive learning environment, Markham College of Commerce is your
          gateway to achieving your postgraduate aspirations.
        </p>
      </section>
    </article>
  );
};

export default PgProgram;
