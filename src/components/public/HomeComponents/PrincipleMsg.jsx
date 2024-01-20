import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Heading2 from "@components/Heading2";

const PrincipleMsg = () => {
  return (
    <section className="bg-gray-100 py-8">
      <Heading2 headingText={"Principle Message"} />
      <div className="max-w-screen-md grid md:grid-cols-2 gap-16 mx-auto p-3">
        <div className="grid h-full w-full rounded-lg overflow-hidden">
          <div className="h-full w-full overflow-hidden">
            <Image
              className="w-full hover:scale-110 duration-500 cursor-pointer"
              src={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguSR__-B17Fl38oQkCFJfsxTM2noA_rCi0KVRpdLcvuaRWxs9KPxuMa9DXSYhgH4njCty0woGugGppj8eRUGcwDdjtGXVALZalGgpbkaVfe4b9fZgB7srLEf3ZpbiBc-4o2mSikZKYXg4Pf4h-7S3F0ENvF3jZw6qg2Z5naiay3RlI0wABIKrTAScAY5o/s533/dummy_principal.png"}
              height={300}
              width={300}
              alt="Markham college of commerce principle"
            />
          </div>

          <p className=" cursor-pointer bg-primary-regular text-center p-2 w-full text-white font-semibold">
            Principle MCC
          </p>
        </div>

        <div className="animation-on-scroll flex justify-center flex-col">
          <FontAwesomeIcon
            className="text-5xl text-slate-400"
            icon={faQuoteLeft}
          />
          <p className="text-center">
            Dear students, welcome to our college&lsquo;s virtual space. Here,
            we strive to create an environment that nurtures your dreams and
            empowers you to excel. Embrace opportunities, ignite your passion,
            and together let&lsquo;s embark on a transformative journey of
            knowledge, growth, and success. Best wishes for an enriching
            academic experience!
          </p>
          <div className="text-right my-4">
            <p className="font-semibold">Principle</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipleMsg;
