import LogoAndInfo from "./LogoAndInfo";
import Navbar from "./Navbar";
import TopHeaderMenu from "./TopHeaderMenu";

const Header = () => {
  return (
    <header>
      <TopHeaderMenu />
      <div className="mt-14 mb-4 md:my-4">
        <LogoAndInfo />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
