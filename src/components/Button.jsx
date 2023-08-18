import Link from "next/link";

const Button = ({ text, href }) => {
  return (
    <Link
      className="bg-primary-regular hover:bg-[#f33d06] text-white font-medium py-2 px-6 rounded-full duration-500"
      href={href}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default Button;
