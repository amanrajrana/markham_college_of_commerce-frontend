//
const apiURL =
  process.env.NODE_ENV === "production"
    ? "https://api.techieverse.in"
    : "http://localhost:5000";

export default apiURL;
