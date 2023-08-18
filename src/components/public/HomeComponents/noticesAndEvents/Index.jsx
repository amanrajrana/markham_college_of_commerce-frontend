import Heading2 from "@components/Heading2";
import ImportantLink from "./ImportantLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faLink } from "@fortawesome/free-solid-svg-icons";
import Notices from "./Notices";

const NoticesAndEvents = () => {
  return (
    <section className="my-8 p-3">
      <Heading2 headingText={"Notice And Event"} />

      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
        {/* ===== Notice Container ===== */}
        <div className="grid gap-8 shadow-2xl p-4 md:col-span-2">
          <div className="h-fit">
            <h3 className="text-2xl font-semibold">
              <FontAwesomeIcon className="mr-2" icon={faBell} />
              Notice
            </h3>
            <div className="h-0.5 w-16 bg-primary-regular rounded-full"></div>
          </div>

          {/* Notices, Render on client side  */}
          <div className="h-96 overflow-hidden">
            <Notices />
          </div>
        </div>

        {/* ====== Important Link ===== */}
        <div className="bg-gradient-to-tl w-full to-blue-950 from-blue-900 text-white p-4">
          <div className="h-fit">
            <h3 className="text-2xl font-semibold">
              <FontAwesomeIcon className="mr-2" icon={faLink} />
              Important Link
            </h3>
            <div className="h-0.5 w-16 bg-primary-regular rounded-full"></div>
          </div>
          <ImportantLink />
        </div>
      </div>
    </section>
  );
};

export default NoticesAndEvents;
