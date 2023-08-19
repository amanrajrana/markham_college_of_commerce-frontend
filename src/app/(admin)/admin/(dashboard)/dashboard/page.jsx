import Heading3 from "@/components/Heading3";

const StudentDashboard = () => {
  return (
    <div className="min-h-fit  sm:mx-2 border-2 rounded-md border-primary-regular overflow-x-auto">
      <h1 className="bg-primary-regular p-2 sm:p-4 text-secondary font-medium">
        Dashboard
      </h1>
      <section className="p-4 overflow-hidden">
        <Heading3 headingText={"New Admission Application Received"} />
        <div className="border  my-4 bg-secondary overflow-x-auto">
          <table className="max-w-full w-full min-w-max">
            <thead>
              <tr className="bg-blue-900 text-secondary">
                <th className="border border-gray-300 px-4 py-2">
                  Application ID
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Student Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Course</th>
                <th className="border border-gray-300 px-4 py-2">
                  Application Date
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Application Status
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="h-36 w-full flex justify-center items-center">
            There is not any Application
          </div>
        </div>
      </section>

      <section className="p-4 overflow-hidden">
        <Heading3 headingText={"Request For Changing"} />
        <div className="border  my-4 bg-secondary overflow-x-auto">
          <table className="max-w-full w-full min-w-max">
            <thead>
              <tr className="bg-blue-900 text-secondary">
                <th className="border border-gray-300 px-4 py-2">
                  Application ID
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Student Name
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Changing Request
                </th>
                <th className="border border-gray-300 px-4 py-2">Old Data</th>
                <th className="border border-gray-300 px-4 py-2">New Data</th>
                <th className="border border-gray-300 px-4 py-2">
                  Request of Date
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Request Status
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="h-36 w-full flex justify-center items-center">
            Not any Pending Request
          </div>
        </div>
      </section>
      <section className="p-4 overflow-hidden">
        <Heading3 headingText={"Contact Request"} />
        <div className="border  my-4 bg-secondary overflow-x-auto">
          <table className="max-w-full w-full min-w-max">
            <thead>
              <tr className="bg-blue-900 text-secondary">
                <th className="border border-gray-300 px-4 py-2">
                  Ticket Number
                </th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Type</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Time</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="h-36 w-full flex justify-center items-center">
            There is not any Complain Received
          </div>
        </div>
      </section>
      <section className="p-4 overflow-hidden">
        <Heading3 headingText={"Feedback Received"} />
        <div className="border  my-4 bg-secondary overflow-x-auto">
          <table className="max-w-full w-full min-w-max">
            <thead>
              <tr className="bg-blue-900 text-secondary">
                <th className="border border-gray-300 px-4 py-2">
                  Feedback Id
                </th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Feedback Type
                </th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Message</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="h-36 w-full flex justify-center items-center">
            There is not any Feedback Received
          </div>
        </div>
      </section>
      <section className="p-4 overflow-hidden">
        <Heading3 headingText={"Ghost Complaint"} />
        <div className="border  my-4 bg-secondary overflow-x-auto">
          <table className="max-w-full w-full min-w-max">
            <thead>
              <tr className="bg-blue-900 text-secondary">
                <th className="border border-gray-300 px-4 py-2">
                  Complaint Id
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Complaint Type
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Complaint Date
                </th>
                <th className="border border-gray-300 px-4 py-2">Message</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="h-36 w-full flex justify-center items-center">
            There is not any Complaint Received
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
