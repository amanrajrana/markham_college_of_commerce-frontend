import Image from "next/image";
import styles from "./styles.module.css";
import Heading2 from "@/components/Heading2";

const SupportLink = () => {
  const links = [
    {
      id: 1,
      src: "/image/SupportLinkImages/Vinoba_Bhave_University_logo.png",
      alt: "Vinoba bhave university",
      href: "https://www.vbu.ac.in/login",
    },
    {
      id: 1.5,
      src: "/image/SupportLinkImages/e-kalyan_logo.png",
      alt: "eKalyan logo",
      href: "https://ekalyan.cgg.gov.in/",
    },
    {
      id: 2,
      src: "/image/SupportLinkImages/chancellor-portal-logo.png",
      alt: "chancellor portal logo",
      href: "https://jharkhanduniversities.nic.in/home",
    },
    {
      id: 3,
      src: "/image/SupportLinkImages/digilocker_logo.png",
      alt: "DigiLocker",
      href: "https://www.digilocker.gov.in/",
    },
    {
      id: 4,
      src: "/image/SupportLinkImages/digital-india.png",
      alt: "Digital India",
      href: "https://digitalindia.gov.in/",
    },
    {
      id: 5,
      src: "/image/SupportLinkImages/UGC_logo.png",
      alt: "UGC",
      href: "https://www.ugc.gov.in/",
    },
    {
      id: 6,
      src: "/image/SupportLinkImages/india-gov.png",
      alt: "India.gov.in",
      href: "https://www.india.gov.in/",
    },
    {
      id: 7,
      src: "/image/SupportLinkImages/my-gov.webp",
      alt: "My Gov",
      href: "https://www.mygov.in/",
    },
    {
      id: 8,
      src: "/image/SupportLinkImages/Jharkhand-logo.png",
      alt: "Jharkhand gov",
      href: "https://www.jharkhand.gov.in/",
    },
  ];
  return (
    <section className="my-8">
      <div className="max-w-screen-xl mx-auto p-3 overflow-hidden">
        <Heading2 headingText={"Quick Links"} />
        <div className={`${styles.linkImage} m-3 flex items-center gap-8 min-w-fit`}>
          {links.map((link) => (
            <a
              className="h-36 w-36 flex items-center"
              key={link.id}
              href={link.href}
              referrerPolicy="no-referrer"
              target="_blank"
            >
              <Image src={link.src} alt={link.alt} height={120} width={120} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportLink;
