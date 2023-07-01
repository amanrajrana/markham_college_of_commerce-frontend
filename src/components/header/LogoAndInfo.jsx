import Image from "next/image";
import Button from "../Button";

const LogoAndInfo = () => {
  return (
    <div className="w-full py-2 px-4">
      <div className="flex justify-between max-w-screen-xl items-center mx-auto w-full">
        <div>
          <Image
            src={"/logo.webp"}
            alt="Markham college of commerce"
            width={400}
            height={90}
          />
        </div>
        <div className="hidden md:block">
          <Button href={'#'} text={'Log In'}/>
        </div>
      </div>
    </div>
  );
};

export default LogoAndInfo;
