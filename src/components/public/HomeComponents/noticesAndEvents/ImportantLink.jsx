import Link from "next/link";

const ImportantLink = () => {
  const impLinks = [
    {
      id: 0,
      text: "BCA Admission page",
      path: "",
    },
    {
      id: 3350,
      text: "BCA Admission page",
      path: "",
    },
    {
      id: 330,
      text: "BCA Admission page",
      path: "",
    },
    {
      id: 70,
      text: "BCA Admission page",
      path: "",
    },
    {
      id: 30,
      text: "BCA Admission page",
      path: "",
    },
    {
      id: 20,
      text: "BCA Admission page",
      path: "",
    },
    {
      id: 10,
      text: "BCA Admission page",
      path: "",
    },
  ];
  return (
    <div className="grid my-4">
      {impLinks.map((link) => (
        <Link
          key={link.id}
          className="border-t border-b border-white p-4 hover:text-primary"
          href={link.path}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default ImportantLink;
