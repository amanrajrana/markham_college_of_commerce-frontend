//
const apiURL =
  process.env.NODE_ENV === "production"
    ? "https://api.localhost.com"
    : "http://localhost:5000";

export default apiURL;
