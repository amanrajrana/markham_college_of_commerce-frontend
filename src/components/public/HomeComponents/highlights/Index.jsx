import {
  faBriefcase,
  faChalkboardTeacher,
  faCogs,
  faGraduationCap,
  faUniversity,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Heading2 from "@components/Heading2";
import Highlight from "./Highlight";

const Highlights = () => {
  return (
    <section className="my-4 px-3 py-4 bg-blue-950 text-white">
      <div className="max-w-screen-xl mx-auto my-4">
        <Heading2 headingText={"Why MCC"} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Highlight
            icon={faGraduationCap}
            heading={"UGC Recog. Program"}
            text={
              "Our courses lead to degrees from Vinoba Bhave University, UGC recognized and widely accepted. Open doors to diverse career opportunities in pvt, Gov & MNCs."
            }
          />
          <Highlight
            icon={faUsers}
            heading={"Holistic Development"}
            text={
              "Engage in a well-rounded education that focuses not only on academics but also on personal growth, character development, and extracurricular activities."
            }
          />
          <Highlight
            icon={faCogs}
            heading={"Industry-Relevant Curriculum"}
            text={
              "Gain practical knowledge through a curriculum designed in collaboration with industry leaders, ensuring you're well-prepared for real-world challenges."
            }
          />
          <Highlight
            icon={faChalkboardTeacher}
            heading={"Exceptional Faculty"}
            text={
              "Learn from experienced professors who are experts in their fields, providing unparalleled guidance and mentorship."
            }
          />
          <Highlight
            icon={faBriefcase}
            heading={"Career Support"}
            text={
              "Benefit from dedicated career services that offer internships, placements, and networking opportunities to kick-start your professional journey."
            }
          />
          <Highlight
            icon={faUniversity}
            heading={"UGC Recognition"}
            text={
              "Rest assured knowing that our college is recognized by the University Grants Commission (UGC), ensuring the quality and credibility of your education"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
