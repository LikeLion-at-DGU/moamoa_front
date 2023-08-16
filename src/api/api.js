import axios from "axios";

// const { VITE_APP_SERVER_PORT } = "http://127.0.0.1:8000";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
