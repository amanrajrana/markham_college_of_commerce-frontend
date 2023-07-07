import Button from "@components/Button";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <section
      className={`${styles.hero} max-h-[1200px] min-h-[800px] md:min-h-[600px] h-[90vh] p-3`}
    >
      <div className="flex flex-col gap-4 justify-center h-full max-w-screen-xl mx-auto text-white">
        {/* ========== Section Text START ========== */}
        <h2 className="flex flex-col text-4xl md:text-5xl lg:text-6xl leading-[3rem] md:leading-[4rem] lg:leading-[5rem] font-bold ">
          <span className="tracking-wider">Unlock Your</span>
          <span className="tracking-wider">Education Dreams</span>
          <span className="tracking-wider">With Us!!!</span>
        </h2>
        <p className="leading-8 my-4 max-w-sm">
          Empowering students with education for a brighter future. Welcome to
          our college
        </p>
        <div className="my-8">
          <Button text={"EXPLORE &rarr;"} href={"#"} />
        </div>
        {/* ========== Section Text END ========== */}
      </div>
    </section>
  );
};

export default Hero;
