//
const apiURL =
  process.env.NODE_ENV === "production"
    ? "https://apimcc.amanrajrana.engineer"
    : "http://localhost:5000";

export default apiURL;
