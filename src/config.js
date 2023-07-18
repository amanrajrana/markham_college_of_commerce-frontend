//
const apiURL = () => {
  if (!process.env.API_HOST) {
    throw new Error("API_HOST environment variable not set");
  }
  return process.env.API_HOST;
};

export default apiURL;
