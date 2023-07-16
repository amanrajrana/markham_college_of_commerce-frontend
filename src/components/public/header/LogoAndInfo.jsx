import Image from "next/image";
import Button from "@components/Button";
import Link from "next/link";

const LogoAndInfo = () => {
  return (
    <div className="w-full py-2 px-4">
      <div className="flex justify-between max-w-screen-xl items-center mx-auto w-full">
        <Link href={'/'}>
          <Image
            src={"/logo.webp"}
            alt="Markham college of commerce"
            width={400}
            height={90}
          />
        </Link>
        <div className="hidden md:block">
          <Button href={'/student/login'} text={'Log In'}/>
        </div>
      </div>
    </div>
  );
};

export default LogoAndInfo;
