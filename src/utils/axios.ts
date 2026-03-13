import axios from "axios";
import { deleteCookie } from "cookies-next";
import { handlePathname } from "./helper";

const DEV_NODE_ENV = process.env.NODE_ENV === "development";

export const axiosInstance = axios.create({
  baseURL: DEV_NODE_ENV
    ? "http://localhost:3000/api"
    : "https://priority-soft-assessment.vercel.app/api",
});

// Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const statusCode =
      error?.response?.data?.statusCode ?? error?.response?.status;

    if (statusCode === 401) {
      deleteCookie("USER_TOKEN");
      if (typeof window !== "undefined") {
        if (window.location.pathname !== "/login") {
          window.location.href = handlePathname(window.location.pathname);
        }
      }
    }

    return Promise.reject(error);
  },
);
