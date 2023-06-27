import LogoAndInfo from "./LogoAndInfo";
import Navbar from "./Navbar";
import TopHeaderMenu from "./TopHeaderMenu";

const Header = () => {
  return (
    <header>
      <TopHeaderMenu />
      <div className="my-4">
        <LogoAndInfo />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
