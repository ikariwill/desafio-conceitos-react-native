import axios from "axios";

const api = axios.create({
  baseURL: "http://4eda815c.ngrok.io",
});

export default api;
