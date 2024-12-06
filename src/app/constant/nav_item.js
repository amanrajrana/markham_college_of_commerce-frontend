export const NAV__ITEMS = [
  {
    isDropDown: false,
    name: "Home",
    path: "/",
  },
  {
    isDropDown: true,
    name: "About College",
    dropDownItems: [
      { name: "About Us", path: "/about-us" },
      { name: "Vision & Mission", path: "/vision-mission" },
      { name: "Principal's Message", path: "/principal-message" },
      { name: "Why Choose Us", path: "/why-choose-us" },
    ],
  },
  {
    isDropDown: true,
    name: "Programs",
    dropDownItems: [
      { name: "UG Programs", path: "/ug-program" },
      { name: "PG Programs", path: "/pg-program" },
      { name: "Vocational Programs", path: "/vocational-program" },
    ],
  },
  {
    isDropDown: false,
    name: "Facilities",
    path: "#",
  },
  {
    isDropDown: false,
    name: "Admission",
    path: "/student/signup",
  },
  {
    isDropDown: true,
    name: "Notice",
    dropDownItems: [
      { name: "Admission", path: "#" },
      { name: "Exam", path: "#" },
      { name: "Class", path: "#" },
      { name: "Event", path: "#" },
      { name: "Programs", path: "#" },
    ],
  },
  {
    isDropDown: true,
    name: "Campus",
    dropDownItems: [
      { name: "NCC", path: "/campus/ncc" },
      { name: "United Bank ", path: "/campus/united-bank" },
      { name: "Csp", path: "/campus/csp" },
      { name: "Canting", path: "/campus/canting" },
    ],
  },
  {
    isDropDown: false,
    name: "Gallery",
    path: "/gallery",
  },
  {
    isDropDown: true,
    name: "Feedback",
    dropDownItems: [
      { name: "Student", path: "/feedback/student" },
      { name: "College", path: "/feedback/college" },
      { name: "Class", path: "/feedback/class" },
      { name: "Event", path: "/feedback/Event" },
    ],
  },
];
