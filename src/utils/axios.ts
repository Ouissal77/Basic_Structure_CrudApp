import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';


/* 
export const fetcher = async (axiosInstance: AxiosInstance, args: string | [string, AxiosRequestConfig]) => {
    const [url, config] = Array.isArray(args) ? args : [args];
    const res = await axiosInstance.get(url, { ...config });
    return res.data;
  }; */
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8082/api/students', // Set the base URL for your API
  /* headers: {
    'Content-Type': 'application/json',
  }, */
});
export const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);





export default axiosInstance;