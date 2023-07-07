import Link from "next/link";
import PropTypes from "prop-types";

const DropDownItem = ({ dropDownItemsList, setNavbarVisible }) => {
  return (
    <ul className="bg-blue-950 md:bg-transparent p-3 md:px-0 md:absolute duration-500">
      {dropDownItemsList.map((item) => (
        <Link
          key={item.id}
          className="border-b border-blue-800 md:min-w-[10rem]  md:border-white px-4 py-2 block md:bg-primary md:hover:bg-red-700 duration-500"
          href={item.path}
          onClick={() => setNavbarVisible(false)}
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
};

DropDownItem.propTypes = {
  dropDownItemsList: PropTypes.array.isRequired,
  setNavbarVisible: PropTypes.func.isRequired,
};

export default DropDownItem;
