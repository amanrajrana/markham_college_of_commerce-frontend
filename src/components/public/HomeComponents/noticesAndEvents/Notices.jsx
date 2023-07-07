import Button from "@components/Button";
import Notice from "./NoticeItem";
import styles from "./styles.module.css";

const Notices = () => {
  //TODO: fetch notices form database
  const notices = [
    {
      id: 1,
      category: "Exam",
      title: "Sem IV external exam start from 04 august 2023",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "",
      detailsLink: "",
    },
    {
      id: 2,
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "",
      detailsLink: "",
    },
    {
      id: 3,
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "",
      detailsLink: "",
    },
    {
      id: 4,
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "",
      detailsLink: "",
    },
    {
      id: 5,
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "",
      detailsLink: "",
    },
    {
      id: 6,
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "",
      detailsLink: "",
    },
    {
      id: 7,
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "",
      detailsLink: "",
    },
    {
      id: 8,
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "",
      detailsLink: "",
    },
    {
      id: 9,
      category: "Admission",
      title: "Final merit list of BCA",
      date: "14 June 2023",
      description: "Final merit list of BCA admission 2023-2026 is release",
      downloadLink: "",
      detailsLink: "",
    },
    {
      id: 10,
      category: "Exam",
      title: "Sem-6 (2020-23) Internal Exam",
      date: "14 June 2023",
      description: "Internal Exam of UG sem-vi start form 26-june-2023",
      downloadLink: "",
      detailsLink: "",
    },
  ];

  return (
    <div className={`${styles.noticeList} grid gap-6 m-4`}>
      {notices.map((notice) => (
        <Notice
          key={notice.id}
          category={notice.category}
          title={notice.title}
          date={notice.date}
          description={notice.description}
          downloadLink={notice.downloadLink}
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
