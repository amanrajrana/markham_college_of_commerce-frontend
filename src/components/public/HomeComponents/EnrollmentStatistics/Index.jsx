
// import Heading2 from "../../Heading2";
import Heading2 from "@components/Heading2";
import Statistics from "./Statistics";

const EnrollmentStatistics = () => {
  return (
    <section className="p-3 my-8">
      <Heading2 headingText={"Statistics And Programs"} />
      {/* ======== Container ======== */}
      <div className="max-w-[15rem] sm:max-w-[30rem] min-h-[40rem] sm:min-h-[25rem] md:min-h-[10rem] md:max-w-screen-xl flex flex-col justify-evenly sm:grid gap-y-8 sm:grid-cols-2 md:grid-cols-4 sm:items-center mx-auto bg-secondary shadow rounded-full sm:rounded-sm  md:rounded-full w-full py-8 md:py-0">
        <Statistics text={"UG+PG Programs"} number={28} />
        <Statistics text={"Vocational Programs"} number={6} />
        <Statistics text={"Enrolled Students"} number={4670} />
        <Statistics text={"Active Staff"} number={154} />
      </div>
    </section>
  );
};

export default EnrollmentStatistics;
