import Image from "next/image";
import Form from "./components/Form";
import Link from "next/link";

export const metadata = {
  title: "Student Login Portal - Markham College of Commerce, Hazaribagh",
  description:
    "Welcome to Markham College of Commerce, located in Hazaribagh, Jharkhand. We offer a wide range of UG, PG, and Vocational programs such as BCA, BBA, BJMC, and BMLT. As a government-owned college affiliated with Vinoba Bhave University, we provide quality education for 12th pass students seeking UG degrees and specialized vocational programs. Explore our comprehensive curriculum and dynamic learning environment to shape a successful future.",
};

const Login = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 py-16">
      {/* Login From */}
      <div className="flex flex-col max-w-sm mx-auto border rounded-sm px-4 py-6 items-center justify-center bg-white shadow-2xl shadow-blue-900">
        <Image
          src={"/mcc-icon.png"}
          alt={"Markham College of Commerce"}
          width={100}
          height={100}
        />
        <Form />
        <div className="my-3 text-gray-500 w-full flex justify-center flex-col text-center items-center">
          <span className="block border-b w-full relative -bottom-4  "></span>
          <span className="bg-white w-fit p-1 relative z-10">or</span>
        </div>
        <Link
          className="duration-500 bg-primary-regular py-2 px-4 w-full text-center text-white hover:underline font-medium"
          href="/student/signup"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
