import Heading2 from "@/components/Heading2";
import Features from "@/components/public/HomeComponents/Features/Index";
import Highlights from "@/components/public/HomeComponents/highlights/Index";
import GetInTouch from "@/components/public/footer/GetInTouch";

export const metadata = {
  title: "Why Join Us - Markham College of Commerce, Hazaribagh",
  description:
    "Dear students, welcome to our college&lsquo;s virtual space. Here, we strive to create an environment that nurtures your dreams and empowers you to excel. Embrace opportunities, ignite your passion, and together lsquo;s embark on a transformative journey of knowledge, growth, and success. Best wishes for an enriching academic experience!",
};

const WhyChooseUs = () => {
  return (
    <article className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-primary-regular text-2xl font-bold">
        Why Choose Us - Markham college of commerce
      </h1>

      <div className="border-t-4 border-primary-regular p-4 shadow-lg my-4 rounded-md">
        <Heading2 headingText={"Why choose us"} />
        <div className="grid gap-4 text-xl my-4 px-2">
          <p>
            <span className="text-4xl font-bold text-primary-regular">T</span>he
            college has a vibrant campus life with a wide range of opportunities
            to fill your free time.
          </p>
          <p>
            The college has an impressive and pollution-free campus with
            panoramic green surroundings, elegant landscaping and beautiful
            flower-beds.
          </p>
          <p>
            The college has separate individual departments for all subjects
            with young, dynamic faculty and non-teaching staff and with good
            results.
          </p>
          <p>
            The college has the most eminent Faculty members and they are really
            well qualified, experienced and truly committed towards enhancement
            and development of the students.
          </p>
          <p>
            The college has well-equipped with modern facilities like library,
            laboratory, classrooms, computer lab, canteen, common rooms,
            multipurpose halls & playground etc.
          </p>
          <p>
            A sufficient number of classrooms with varying sizes are made
            available for the smooth conduct of different classes in the college
          </p>
          <p>
            The college has a library with a good number of books (both text and
            reference) on various subjects to meet the needs of the students as
            well as the teachers with reading room facility. Daily Newspapers
            and selected journals are also regularly subscribed.
          </p>
          <p>
            State of the Art Laboratories with sufficient space and all the
            necessary equipment are made available to various departments
          </p>
          <p>
            The college has established an Internal Quality Assurance Cell
            (IQAC) on 1st December 2014 to assure the quality of the college and
            also details regarding submission of Annual Quality Assurance
            Reports (AQAR) to NAAC annually
          </p>
          <p>
            The college runs a canteen inside the campus where staff and
            students can have meals and snacks prepared in a hygienic manner and
            at an affordable cost
          </p>
          <p>
            Internet & Wi-Fi facilities may be availed by the students and
            teachers as per their needs
          </p>
          <p>Transportation facility is available for the students</p>
          <p>
            The college has a large playground with will-equipment for different
            sports like Cricket, Football, Volleyball, Hockey, Badminton and so
            on
          </p>
          <p>
            A medical facility has been available in the college for the benefit
            of the students
          </p>
          <p>
            State Government and Central Government offers a number of
            scholarships to the meritorious students and the students belonging
            to SC / ST / OBC
          </p>
          <p>
            A special complaint cell (Sexual Harassment Cell) has been formed
            for the female students in the college. Students can directly
            complain orally or by written application to the head of the cell.
            Apart from this, Ragging is strictly prohibited on the college
            campus
          </p>
          <p>
            To sharpen the skill of students and their personality development,
            various curricular and extra-curricular activities are the regular
            features of the institution
          </p>
          <p>
            The college also organizes workshops, seminars, and conferences for
            improving teaching skills and methodology
          </p>
          <p>
            The college also provides NCC training to its students. The NCC
            cadets attend different camps and earn pride for themselves and for
            the college
          </p>
          <p>
            The college has N.S.S. units in the College, Students may take part
            in those part in those units for which they will get certificate
            from the concerned unit for their completion of course and good
            performance which will count for job as an additional qualification
          </p>
          <p>
            The college consists Women Cell to help female students. This cell
            helps and guides girls to sort out from their personal problem and
            avoid them from any harassment
          </p>
        </div>
        <Features />
        <Highlights />
        <div className="filter invert">
          <GetInTouch />
        </div>
      </div>
    </article>
  );
};

export default WhyChooseUs;
