import Heading2 from "@/components/Heading2";
import Image from "next/image";
import SignUpForm from "./components/Form";
import styles from "../login/styles.module.css";

export const metadata = {
  title: "Student Registration Page - Markham College of Commerce, Hazaribagh",
  description:
    "Welcome to Markham College of Commerce, located in Hazaribagh, Jharkhand. We offer a wide range of UG, PG, and Vocational programs such as BCA, BBA, BJMC, and BMLT. As a government-owned college affiliated with Vinoba Bhave University, we provide quality education for 12th pass students seeking UG degrees and specialized vocational programs. Explore our comprehensive curriculum and dynamic learning environment to shape a successful future.",
};

const SignUp = () => {
  return (
    <>
      <div className={`${styles.main} relative`}>
        <div className="z-10 relative">
          <div className="max-w-screen-xl mx-auto py-8 px-3 ">
            <div className="bg-white p-4 max-w-fit mx-auto flex flex-col items-center rounded-sm shadow-lg ">
              <Image
                src="/mcc-icon.png"
                alt="Markham College of Commerce"
                width={100}
                height={100}
              />
              <Heading2 headingText="Student Registration" />
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>

      <div className="my-16">
        <Heading2 headingText={"how to apply"} />
        <Image
          className="mx-auto w-full max-w-3xl"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiato1AN49dqMWf-7YxYcqfpk7TQIiNnkgatMQc0kaxwYVtlpTh5IW1PRVGHQK2djo5ezsG-Bl7Z2beLlW7-NKkkqxfNbz3zoek0e6F2u_kBVHDZ9LUeaGXvUQJmdtSqLvxa1eUZfMbqO7-yIY7h9-aEFl-kIHq7gQ6--BV4I4eEup0oWcG6od7_Id_9Vc/s1920/how-to-apply.png"
          alt="how to apply"
          width={820}
          height={500}
        />
      </div>
    </>
  );
};

export default SignUp;
