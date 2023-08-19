import Button from "@components/Button";
import Notice from "./NoticeItem";
import styles from "./styles.module.css";

// set api url to make api calls
const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const Notices = () => {
  //TODO: fetch notices form database
  const notices = [
    {
      category: "Exam",
      title: "Sem IV external exam start from 04 august 2023",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
    {
      category: "Exam",
      title: "Sem-6 (2020-23) Internal Exam",
      date: "14 June 2023",
      description: "Internal Exam of UG sem-vi start form 26-june-2023",
      downloadLink: "/notice/download",
      detailsLink: "",
    },
  ];

  return (
    <div className={`${styles.noticeList} grid gap-6 m-4`}>
      {notices.map((notice, index) => (
        <Notice
          key={index}
          category={notice.category}
          title={notice.title}
          date={notice.date}
          description={notice.description}
          downloadLink={apiURL + notice.downloadLink}
          detailsLink={notice.detailsLink}
        />
      ))}
      <div className="mx-auto w-fit">
        <Button text={"More &rarr;"} href={""} />
      </div>
    </div>
  );
};

export default Notices;
