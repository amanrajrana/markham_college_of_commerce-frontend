import Link from "next/link";
import Button from "../Button";
import SocialMediaLink from "../hero/SocialMediaLink";

const TopHeaderMenu = () => {
  return (
    <div className="h-12 flex items-center md:block fixed top-0 w-full py-2 px-4 bg-blue-900 md:h-auto md:static">
      <div className="max-w-screen-xl w-full mx-auto items-center flex justify-between  flex-wrap text-white font-gilroy font-medium">
        <h2 className="text-xs hidden md:block">
          Welcome to Markham College of Commerce
        </h2>
        <Link href={'/'} className="md:hidden">HOME</Link>
        <div className="hidden md:block">
          <SocialMediaLink />
          <span>
            <Button href={"#"} text={"Official"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderMenu;
