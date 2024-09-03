import axios from "axios";

const api = axios.create({
  baseURL: "https://task-2-backend-1.onrender.com/api",
});

export default api;
