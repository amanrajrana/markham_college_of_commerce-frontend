import Link from "next/link";
import Button from "../../Button";
import SocialMediaLink from "../../SocialMediaLink";
import Image from "next/image";

const TopHeaderMenu = () => {
  return (
    <div className="shadow-lg md:shadow-none h-12 z-[2] flex items-center md:block fixed top-0 w-full py-2 px-4 bg-blue-900 md:h-auto md:static">
      <div className="max-w-screen-xl w-full mx-auto items-center flex justify-between  flex-wrap text-white font-medium">
        <h2 className="text-xs hidden md:block">
          Welcome to Markham College of Commerce
        </h2>
        <Link href={"/"} className="md:hidden">
          <Image
            src={"/logo.webp"}
            height={45}
            width={150}
            alt="Markham College of commerce"
          />
        </Link>
        <div className="hidden md:block">
          <SocialMediaLink />
          <span>
            <Button href={"/admin/login"} text={"Official"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderMenu;
