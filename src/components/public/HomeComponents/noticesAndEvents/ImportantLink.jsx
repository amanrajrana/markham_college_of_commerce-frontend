const ImportantLink = () => {
  const impLinks = [
    {
      text: "» E-Kalyan Scholarship",
      path: "https://ekalyan.cgg.gov.in/",
    },
    {
      text: "» Exam Form - vbunuiv.in",
      path: "https://www.vbuuniv.in/vbuexamform/login",
    },
    {
      text: "» Vinoba Bhave University (VBU)",
      path: "http://vbu.ac.in/",
    },
    {
      text: "» Download Admit Card - vbunuiv.in",
      path: "https://www.vbuuniv.in/login",
    },
    {
      text: "» Academic Bank of Credits (abc id)",
      path: "https://www.abc.gov.in/",
    },

    {
      text: "» Check Result - vbunuiv.in",
      path: "http://result.vbuuniv.in/vbuuniv/student/result/pg/preview",
    },
    {
      text: "» University Grants Commission (UGC)",
      path: "https://www.ugc.ac.in/",
    },
  ];
  return (
    <div className="grid my-4">
      {impLinks.map((link, index) => (
        <div
          className="border-t border-b border-white w-full p-4 animation-on-scroll"
          key={index}
        >
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            className="block duration-500 relative hover:translate-x-4"
            href={link.path}
          >
            {link.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImportantLink;
