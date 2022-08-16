import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
import { ACCESS_TOKEN } from "../../constants/localStorage";

export const instance = axios.create({
  baseURL: "https://helpcs.xyz",
});

function requestInterceptor(config: AxiosRequestConfig) {
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    },
  };
}

instance.interceptors.request.use(requestInterceptor);

function responsefulfilledInterceptor(res: AxiosResponse) {
  if (res.status >= 200 && 300 > res.status) {
    return res.data;
  }
  return Promise.reject(res.data);
}

function responseRejectedInterceptor(error: AxiosError) {
  return Promise.reject(error);
}

instance.interceptors.response.use(
  responsefulfilledInterceptor,
  responseRejectedInterceptor
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
