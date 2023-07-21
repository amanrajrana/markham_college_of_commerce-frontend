import Image from "next/image";
import styles from "./styles.module.css";
import GoogleMap from "./GoogleMap";
import GetInTouch from "./GetInTouch";
import CopyWriteSection from "./CopyWriteSection";

const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-4 px-3 overflow-hidden`}>
      <div className="py-8 max-w-screen-xl mx-auto grid md:grid-cols-11 gap-16">
        {/* ====== Logo ======== */}
        <div className="animation-on-scroll col-span-3">
          <Image
            className="max-w-full invert self-center mx-auto"
            src={"/logo.webp"}
            alt="Markham college of commerce logo"
            height={150}
            width={300}
          />
        </div>

        {/* ======== Google Map ======= */}
        <div className="animation-on-scroll col-span-4">
          <GoogleMap />
        </div>

        {/* ======== Get In Touch ========== */}
        <div className="animation-on-scroll text-white col-span-4">
          <GetInTouch />
        </div>
      </div>

      {/* ======= Copyright section ======= */}
      <div className="border-t border-gray-500">
        <CopyWriteSection />
      </div>
    </footer>
  );
};

export default Footer;
