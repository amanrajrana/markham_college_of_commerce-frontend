import Button from "../Button";
import Carousel from "./Carousel";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <section className={`${styles.hero} min-h-[500px] h-[90vh] p-3`}>
      <div className="flex flex-col gap-4 justify-center h-full max-w-screen-xl mx-auto text-secondary">
        {/* ========== Section Text START ========== */}
        <h2 className="flex flex-col text-4xl md:text-5xl lg:text-6xl leading-[3rem] md:leading-[4rem] lg:leading-[5rem] font-bold ">
          <span>Unlock Your</span>
          <span>Education Dreams</span>
          <span>With Us!!!</span>
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
