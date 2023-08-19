import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";
import CollegeAddress from "@/components/public/CollegeAddress";
import CoursesTable from "@/components/public/CoursesTable";
import CoursesWeOffer from "@/components/public/CoursesWeOffer";
import {
  faBookOpen,
  faBusinessTime,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Ug Programs - Markham College of Commerce, Hazaribagh",
  description:
    "Welcome to Markham College of Commerce, located in Hazaribagh, Jharkhand. We offer a wide range of UG, PG, and Vocational programs such as BCA, BBA, BJMC, and BMLT. As a government-owned college affiliated with Vinoba Bhave University, we provide quality education for 12th pass students seeking UG degrees and specialized vocational programs. Explore our comprehensive curriculum and dynamic learning environment to shape a successful future.",
};

const UgPrograms = () => {
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
        "Merit Based through Chancellor Portal, basis of CUET percentile or 12th marks",
    },
  ];

  const SCIENCE_COURSES = [
    {
      title: "Mathematics (UG)",
      path: "/ug-program/mathematics",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Physics (UG)",
      path: "/ug-program/physics",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Chemistry (UG)",
      path: "/ug-program/chemistry",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Botany (UG)",
      path: "/ug-program/botany",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Zoology (UG)",
      path: "/ug-program/zoology",
      duration: "4 Year (8 Sem as FYUGP)",
    },
  ];

  const ART_COURSES = [
    {
      title: "English (UG)",
      path: "/ug-program/english",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Hindi (UG)",
      path: "/ug-program/hindi",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Sanskrit (UG)",
      path: "/ug-program/sanskrit",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Urdu (UG)",
      path: "/ug-program/urdu",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "History (UG)",
      path: "/ug-program/history",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Political Science (UG)",
      path: "/ug-program/political-science",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Economics (UG)",
      path: "/ug-program/economics",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Geography (UG)",
      path: "/ug-program/geography",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Psychology (UG)",
      path: "/ug-program/psychology",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Sociology (UG)",
      path: "/ug-program/sociology",
      duration: "4 Year (8 Sem as FYUGP)",
    },
  ];

  const COMMERCE_COURSES = [
    {
      title: "Accountancy (UG)",
      path: "/ug-program/accountancy",
      duration: "4 Year (8 Sem as FYUGP)",
    },
    {
      title: "Business Studies (UG)",
      path: "/ug-program/business-studies",
      duration: "4 Year (8 Sem as FYUGP)",
    },
  ];

  return (
    <article className="overflow-hidden sm:text-lg">
      <h1 className="text-xl sm:text-2xl font-bold my-2">UG Programs</h1>
      <hr />
      <p className="text-lg mt-4">
        <span className="text-4xl text-primary-regular font-bold">M</span>arkham
        College of Commerce offers a range of undergraduate courses designed to
        equip students with the skills and knowledge necessary for success in
        various industries. Our UG programs include:
      </p>
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
      {/* // Courses We Offer */}
      <Heading2 headingText={"Exploring UG Courses"} />
      <p className="my-8">
        At Markham College of Commerce, we offer a variety of UG courses
        designed to meet the diverse interests of our students.
      </p>
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
              For those with a passion for scientific exploration, we provide
              the following UG science courses:
            </p>
          </div>
          <CoursesTable courses={SCIENCE_COURSES} />
        </div>

        <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
          <div className="px-4 py-4">
            <h3 className="font-semibold text-2xl ">
              <FontAwesomeIcon
                className="text-2xl mx-2 text-primary-regular"
                icon={faBusinessTime}
              />{" "}
              Commerce (B.com)
            </h3>
            <p className="text-slate-600 mb-4">
              Markham College of Commerce offers a range of B.Com courses,
              providing students with a solid foundation in commerce and
              business practices
            </p>
          </div>

          <CoursesTable courses={COMMERCE_COURSES} />
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
              Our List of UG art courses allows students to delve into the world
              of humanities and creative expression:
            </p>
          </div>

          <CoursesTable courses={ART_COURSES} />
        </div>
      </div>
      {/* ===== End of Courses We Offer ===== */}
      <div className="mb-10">
        <Heading3 headingText={"Empowering Your Academic Journey"} />
        <p className="my-4">
          At Markham College of Commerce, our UG courses are designed to foster
          intellectual growth, critical thinking, and holistic development. We
          believe in nurturing well-rounded individuals who are not only experts
          in their chosen fields but also responsible citizens and leaders.
        </p>
        <p className="my-4">
          With dedicated faculty, modern facilities, and a vibrant campus
          community, Markham College of Commerce is your gateway to pursuing
          your passions and achieving academic excellence in your UG journey.
        </p>
      </div>
      <Heading3 headingText={"Our Location"} />
      <CollegeAddress />
    </article>
  );
};

export default UgPrograms;
