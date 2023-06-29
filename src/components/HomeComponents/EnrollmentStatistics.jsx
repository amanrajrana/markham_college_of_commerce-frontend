import Heading2 from "../Heading2";

const EnrollmentStatistics = () => {
  return (
    <section className="p-3 my-8">
      <Heading2 headingText={"Statistics And Programs"} />
      {/* ======== Container ======== */}
      <div className="max-w-[15rem] sm:max-w-[30rem] min-h-[40rem] sm:min-h-[25rem] md:min-h-[10rem] md:max-w-screen-xl flex flex-col justify-evenly sm:grid gap-y-8 sm:grid-cols-2 md:grid-cols-4 sm:items-center mx-auto bg-secondary shadow rounded-full sm:rounded-sm  md:rounded-full w-full py-8 md:py-0">
        {/* ======= First Statistics ======= */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-6xl font-bold mx-1">21</p>
          <span className=" text-slate-500 text-center">
            UG + PG
            <br />
            Programs
          </span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-6xl font-bold mx-1">8</p>
          <span className=" text-slate-500 text-center">
            Vocational
            <br />
            Programs
          </span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-6xl font-bold mx-1">4K&#43;</p>
          <span className=" text-slate-500 text-center">
            Enrolled
            <br />
            Students
          </span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-6xl font-bold mx-1">150&#43;</p>
          <span className=" text-slate-500 text-center">
            Active
            <br />
            Staff
          </span>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentStatistics;
