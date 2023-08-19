import Image from "next/image";

export const metadata = {
  title: "Vision and Mission - Markham College of Commerce, Hazaribagh",
  description:
    "Discover the legacy of education and excellence at Markham College of Commerce, Hazaribagh. Our vision is to empower future leaders through comprehensive commerce education, fostering ethical values and critical thinking. Explore our rich history, from our founding in 1974 by B. D. Jaiswal to becoming a hub of academic growth. Join us in shaping a brighter future for students in Hazaribagh and beyond.",
};

const VisionMission = () => {
  return (
    <article className="max-w-screen-lg mx-auto my-12 p-4">
      <h1 className="text-3xl font-bold my-8 text-primary-regular">
        Vision and Mission -Markham College of Commerce, Hazaribagh
      </h1>
      <div className="bg-secondary border-t-primary-regular border-t-4 shadow-md rounded-md">
        <Image
          className="mx-auto block max-w-full"
          src="https://blogger.googleusercontent.com/img/a/AVvXsEgxu5F2ck-NxCC_sLIsE_ZITTL6tSSZfvgnMNx6eAyPLtAoITCQeIfUx1P2hgmf8o954V62btfNmJ_7jFHlJR3zve_T17fQeBj_5nCkCJq8oJzB9rLX66LYMUqG9fVsVwIRBk-LZtbtiliYCX7ERFtpcm7k_m24eY9af9w-xpgqu_ovzTFxqMgIN9w5HEo"
          width={1000}
          height={500}
          alt="Markham College of Commerce"
        />

        <div className="container mx-auto p-8">
          <div className="mb-8 text-lg">
            <h2 className="text-xl font-semibold mb-2">Vision and Mission</h2>
            <p className="text-gray-700">
              At Markham College of Commerce, our vision is to cultivate a
              vibrant educational environment that empowers students to excel
              both academically and ethically. Through our unwavering commitment
              to quality education, we strive to nurture future leaders who
              contribute to the growth and prosperity of society.
            </p>
            <p className="text-gray-700">
              Our mission is to provide comprehensive and innovative commerce
              education that equips students with the knowledge, skills, and
              values needed to succeed in a dynamic global landscape. We
              prioritize holistic development, fostering critical thinking,
              ethical decision-making, and a sense of responsibility towards the
              community.
            </p>
          </div>

          <div className="mb-8 text-lg">
            <h2 className="text-xl font-semibold mb-2">History and Founding</h2>
            <p className="text-gray-700">
              Markham College of Commerce, Hazaribagh, was established on
              February 10, 1974, under the visionary leadership of B. D.
              Jaiswal. Named after the esteemed educationist Arthur Francis
              Markham, the college&apos;s founding principles were rooted in
              making higher education accessible to the region&apos;s aspiring
              minds.
            </p>
            <p className="text-gray-700">
              Dr. Maheshwar Tiwari, alongside a dedicated team of educators
              including Prof. Shashi Kishore Narayan, Prof. Heyat Ahmed, and
              others, embarked on a journey to offer Intermediate Arts and
              Commerce programs. This marked the inception of a lifelong
              commitment to providing quality education to the community.
            </p>
          </div>

          <div className="mb-8 text-lg">
            <h2 className="text-xl font-semibold mb-2">
              Achievements and Growth
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Since its foundation, the college has blossomed into an
                institution of excellence, with over eight thousand students
                benefiting from its programs annually.
              </li>
              <li>
                With an average success rate of 80%, the college has
                consistently produced accomplished professionals in fields such
                as finance, accounting, medicine, engineering, civil service,
                and more.
              </li>
              <li>
                The commitment of the faculty and the unyielding support of
                students and their guardians have been integral to the
                college&apos;s continuous growth.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VisionMission;
