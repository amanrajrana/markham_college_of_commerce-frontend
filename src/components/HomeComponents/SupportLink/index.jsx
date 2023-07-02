import Image from "next/image";
import styles from "./styles.module.css";
import Heading2 from "@/components/Heading2";

const SupportLink = () => {
  const links = [
    {
      id: 1,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBHEyWDkPjdbXVuIyZzRNngocEwW7_uBgfQLfysb8Av1PY4ATzftQxZBMLoLDVWtb1qq1uHqWJypf9H8AA875qJ8wnFllk3OG3zwOG4CClHV26mvpyBKUqZss4kowZDFIDNOSAn3GXv8veBoVJaj9QU1vD542MGGpHeb3phIBJAGiFo-TCVsRF-Cm3cA4/s330/Vinoba_Bhave_University_logo.png",
      alt: "Vinoba bhave university",
      href: "https://www.vbu.ac.in/login",
    },
    {
      id: 1.5,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9kBfVXNybYeucAiBc4ZSxslkvVpdgZxA14uYLt5F0nG7sPjD_Bur9WPOGes0yNNTQ_jK0mPjzsZX6qrDs6-gS4vQKELUk2aYZMc3tLeCMzk3RizUqYmmsp8SzkKlwXIh1CMQAjvrYO66oqx0yUUkk1EcVMWoMgQDt889gvZPhtUGd352QcwGuu4_prik/s200/e-kalyan_logo.png",
      alt: "eKalyan logo",
      href: "https://ekalyan.cgg.gov.in/",
    },
    {
      id: 2,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjPEqT35BpxQtxFg1DKIIdnom2CE-pycIyA7XZj4vo8o-CZdq_n1ceTST4VVP5MtDcAfsybz5tYUfbJ6Bmb3KdKROL8EY1wiejeGPzPGWFONemYb3hZBDBBNndzFRANBhsehK4D0lS9ZLI21hLVvtdNdkbTxcj2f9h4xcYa6nRdFSTlprHUCfIOSUxG-Y/s502/chancellor-portal-logo.png",
      alt: "chancellor portal logo",
      href: "https://jharkhanduniversities.nic.in/home",
    },
    {
      id: 3,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgCucTqZJJFQVrk_g2zUWRDCuC7V_1sfj2kBf8ruaIiP2b1JM_EM29BYaKMCk0vglCzvuzKDiP6e7C-Jql7VETFXQDFzevgYvArnxhRH4Bhjfxd2MEnP5hegO_LFb81mOUM__-deIp0DiKPFd5ui4f9JYnvzzJPwSxofxyxeEFll8YFkr2wUeY1abi38w/s180/digilocker_logo.png",
      alt: "DigiLocker",
      href: "https://www.digilocker.gov.in/",
    },
    {
      id: 4,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiL7HTFCcYcfvVhykD-kWwsyZy2f7rc6AKKjpkWsX2Lm-YM_Meh8LoFbV5djl6ctyViNow8Grk3CmVOPOTuGVfSUgeVuqEjCF7qiQTpuTy7soqbb5RWs_mvLC6H3asNJ3AWEg0MjVfskqqMU9QX9CTS2Ia1EfDf7dG9gQNr68OnWdamJcCVhqAfawPlFtE/s512/digital-india.png",
      alt: "Digital India",
      href: "https://digitalindia.gov.in/",
    },
    {
      id: 5,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJ0WZS1aMu-j2zBxE-XmCxbxXRsk-eJShN143532WfbWqMqKuVB4p-z6b-nrGIf8HB-WFCKdgDSdoBDTsQNTcY1qWhgmCVINrUw9tW8t6Euyl8aJCUKhPLxNu5PRGq20hIao_55aNG4Bv7Orl-TLA2Y1LUQAhB78ev911uy9EFgaqTZBjXETgtFmRTaec/s200/UGC_Logo.png",
      alt: "UGC",
      href: "https://www.ugc.gov.in/",
    },
    {
      id: 6,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJqnaQfE980Y6dOt6X16v-KqMUo-4ySgAG-TZmRXy8x7ZOEH0Kwmd4WwIqUf4TnaK1clcNOACDixVlR-S3pKWutKgTTQf0xajwna_LPP4z01-2EZAhetsXVtC0dSA4LhuVu2cH1YruaCpo0cj2jgqwjl7VovpJx6mr5Ru2Jd67CYDEGN6dl7RZNxPtbJo/s327/india-gov.png",
      alt: "India.gov.in",
      href: "https://www.india.gov.in/",
    },
    {
      id: 7,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYoUpKafh5s6Yyjd8g9MB5afMcZVLhI6gJpme_YgJfONsIzgVfYpHr4_IUAWy4Gj6qKqw7aUFsIkZKbNjEXyqO5OUdKL9mTfcwITQwnFnFjnl9I7HUM2VgPj6Td3_MQBlZP2Cs6i_gHssiC1cfeZ10Ue-f1QEe4KAOM2Ed2kgKl1ogVsPDR5CXCjQPHO8/s300/my-gov.webp",
      alt: "My Gov",
      href: "https://www.mygov.in/",
    },
    {
      id: 8,
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDP_2V8XiosQLfKzUYUzc57ZD5DPFGnFTtjZ1i1c9tNJtGkZBaXuqYyJU-eHETwJxQUg1tn-_Un6aXO2ieR1M5Del2DPs8b4bcv_GTwd-cqe2FpxTAD0kEPRkV27-uzaiz4QBsIWRnfchiqyR6jOLzyMwnajPMFDibvPa_coilRC8vXOf4BtGd1puCoU8/s1200/Jharkhand-logo.png",
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
