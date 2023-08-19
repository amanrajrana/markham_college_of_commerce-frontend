import Heading2 from "@/components/Heading2";
import CollegeAddress from "@/components/public/CollegeAddress";
import CoursesWeOffer from "@/components/public/CoursesWeOffer";

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
  return (
    <article className="overflow-hidden">
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
      <Heading2 headingText={"Courses We Offer"} />
      <CoursesWeOffer />
      <CollegeAddress />
    </article>
  );
};

export default UgPrograms;
