import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const headers: Readonly<Record<any, any | boolean>> = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Credentials": true,
    "X-Requested-With": "XMLHttpRequest",
  }; 

export default axios.create({
    baseURL: "http://192.168.0.195:8080/",
    headers
})
