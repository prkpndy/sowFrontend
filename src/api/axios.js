import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sow-backend-prakhar-pandeys-projects.vercel.app",
});

export default axiosInstance;
