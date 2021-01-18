import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:8009/api",
  timeout: 1000,
});
