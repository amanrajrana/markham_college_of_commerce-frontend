import Heading2 from "@/components/Heading2";
import CollegeAddress from "@/components/public/CollegeAddress";
import CoursesWeOffer from "@/components/public/CoursesWeOffer";
import GetInTouch from "@/components/public/footer/GetInTouch";

export const metadata = {
  title: "About Us - Markham College of Commerce",
  description:
    "Markham College of Commerce, Hazaribagh was established on 10th February 1974. It is one of the premier institutions established to impart & provide in the field of higher education for the deserving candidates and prove to be a milestone in the part of progress.",
};

const AboutUs = () => {
  const FACILITY_KEYWORDS = [
    "Library",
    "Sports",
    "Laboratories",
    "Internet",
    "Bank / ATMClassroom",
    "Placement",
    "Scholarship",
    "Workshop",
    "Wi-Fi",
    "Playground",
    "Reading Rooms",
    "Multipurpose Hall",
    "Conference Hall",
    "N.C.C.",
    "N.S.S.",
    "Medical Facility",
    "Counseling Centre",
    "Common Rooms",
    "Computer Lab",
    "Cafeteria/Canteen",
    "Anti Ragging",
    "Women Cell",
  ];

  const COLLEGE_INFO = [
    {
      title: "Type Of College",
      value: "Government",
    },
    {
      title: "Accreditation & Recognition",
      value: "Government",
    },
    {
      title: "Established",
      value: "1947",
    },
    {
      title: "Affiliation",
      value: "Vinoba Bhave University, Hazaribagh",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
      <h1 className="text-3xl font-semibold my-8">
        About us - Markham college of commerce, Hazaribagh
      </h1>
      <CollegeAddress />

      <div className="grid gap-4 sm:grid-cols-2 my-4">
        {COLLEGE_INFO.map((info, index) => (
          <div className="p-2" key={index}>
            <h4 className="text-xl font-bold text-primary-regular">
              {info.title}
            </h4>
            <p>{info.value}</p>
          </div>
        ))}
      </div>

      <article className="sm:mx-4 grid gap-6 text-lg border-t-8 border-1 bg-secondary shadow-md p-4 border-primary-regular rounded-md">
        <Heading2 headingText={"About Us"} />

        <p>
          <span className="text-primary-regular">
            Markham College of Commerce,
          </span>{" "}
          Hazaribagh was established
          <span className="text-primary-regular"> on 10th February 1974.</span>
        </p>
        <p>
          It is one of the premier institutions established to impart & provide
          in the field of higher education for the deserving candidates and
          prove to be a milestone in the part of progress.
        </p>
        <p>
          The college is presently affiliated with Vinoba Bhave University,
          Hazaribag and therefore it is a constituent part of this university
          and recognized by the University Grants Commission (UGC) under section
          2(f) on 25th June 1997 & 12(B) on 21st March 2012 under Act, 1956.
        </p>
        <p>
          It is accredited by National Assessment and Accreditation Council
          (NAAC) with &quot;B&quot; Grade - (CGPA Score 2.32 on a 4 Point Scale
          in 1st Cycle) on 22nd February 2017.
        </p>
        <p>
          Mr. B. D. Jaiswal, the renowned industrialists, and business tycoon
          were its founder chairman and Late Rameshwar Prasad (Ram Babu) Ex-MLC
          was the founder secretary.
        </p>
        <p>
          Later, the most reverend word of this place ‘Markham’ was added and
          accepted to the name of this college to pay obeisance to the long and
          noble services that were being imparted by this Irish Pastor Mr. A. F.
          Markham who was the longest serving Principal of St. Columba’s
          College, Hazaribag and later the Vice-chancellor of Ranchi University,
          Ranchi.
        </p>
        <p>
          At the time of the foundation of this college Dr. Maheshwar Tiwari,
          who as a founder Principal and Prof-in-charge of the college took a
          noble initiative with a short but dedicated team.
        </p>
        <p>
          In 1974, the 1st session of Intermediate Arts and Commerce started and
          in the year 1977 Ranchi University, Ranchi awarded affiliation for the
          subjects Hindi, English, Sanskrit, History, Economics, Political
          Science, Philosophy and Commerce up to degree level.
        </p>
        <p>
          The college offers three years undergraduate courses in Arts, Science,
          Commerce, & Management streams under Vinoba Bhave University,
          Hazaribag. The college is also providing Honours teaching in
          vocational subjects.
        </p>

        <div className="max-w-full">
          <Heading2 headingText={"Facility"} />
          <div className="flex gap-4 flex-wrap">
            {FACILITY_KEYWORDS.map((keyword, index) => (
              <span
                className="py-2 px-4 bg-gray-300 font-medium rounded-sm"
                key={index}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* ====== Courses We Offer ====== */}
        <CoursesWeOffer />

        {/* ====== Get In Touch ====== */}
        <div className="max-w-fit invert filter">
          <GetInTouch />
        </div>
      </article>
    </div>
  );
};

export default AboutUs;
