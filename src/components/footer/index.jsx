import Image from "next/image";
import Heading3 from "../Heading3";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-4 px-3`}>
      <div className="py-8 max-w-screen-xl mx-auto grid md:grid-cols-11 gap-16">
        <div className="col-span-3">
          <Image
            className="max-w-full invert self-center mx-auto"
            src={"/logo.webp"}
            alt="Markham college of commerce logo"
            height={150}
            width={300}
          />
        </div>
        <div className="col-span-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.556722163937!2d85.3549607752415!3d23.976110278516995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49bff00a3e861%3A0x50450cbf87180c58!2sMarkham%20college%20of%20commerce!5e0!3m2!1sen!2sin!4v1688217939199!5m2!1sen!2sin"
            width="400"
            height="300"
            className="border-0 w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-white col-span-4">
          <Heading3 headingText={"Get in touch"} />

          <div className="p-4 text-gray-300 grid gap-6 mx-auto">
            {/* ==== Address === */}
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                className="text-4xl text-primary"
                icon={faLocationDot}
              />
              <p>
                barkhagaon road, Yashwant Nagar, Hazaribagh, Jharkhand 825301
              </p>
            </div>

            {/* ======= Email =====  */}
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                className="text-4xl text-primary"
                icon={faEnvelope}
              />
              <p>
                <a
                  className="block hover:text-primary hover:underline duration-500"
                  href="mailto:principle-mcc@example.com"
                >
                  principle-mcc@example.com
                </a>
                <a
                  className="block hover:text-primary hover:underline duration-500"
                  href="mailto:principle-mcc@example.com"
                >
                  help@example.com
                </a>
              </p>
            </div>

            {/* ======== Mobile ======  */}
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                className="text-4xl text-primary"
                icon={faPhone}
              />
              <p>
                <a
                  className="block hover:text-primary hover:underline duration-500"
                  href="tel:+918888888888"
                >
                  +91 8888888888
                </a>
                <a
                  className="block hover:text-primary hover:underline duration-500"
                  href="tel:+918888888888"
                >
                  +91 8888888888
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======= Copyright section ======= */}
      <div className="border-t border-gray-500">
        <div className="text-gray-300 flex flex-wrap max-w-screen-xl mx-auto justify-between items-center p-3 opacity-70 text-sm">
          <p>&copy; 2023 Markham college of commerce</p>

          <p>
            Developed by&nbsp;
            <a
              href="https://github.com/amanrajrana"
              className="hover:text-primary duration-500"
            >
              Aman Raj Rana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
