// libraries
import axios, { AxiosResponse } from "axios";

// utils
import { isOnProduction } from "../utils/Utils";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = isOnProduction;
axios.defaults.baseURL = isOnProduction
  ? "https://pokeapi.co/api/v2"
  : "https://pokeapi.co/api/v2";

export const getRequest: (url: string) => Promise<AxiosResponse> = async (
  url: string,
): Promise<AxiosResponse> => {
  return await axios.get(url);
};

export const postRequest: <T, R>(
  url: string,
  data: T,
) => Promise<AxiosResponse<R> | { errorMessage: string }> = async <T, R>(
  url: string,
  data: T,
): Promise<AxiosResponse<R> | { errorMessage: string }> => {
  try {
    const res = await axios.post<R>(url, data);
    console.log("res =>", res);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        errorMessage:
          error.response?.data?.error || "An error occurred. Please try again.",
      };
    }
    return { errorMessage: "An unexpected error occurred." };
  }
};
