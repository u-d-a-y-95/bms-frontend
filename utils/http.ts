import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

interface IResponse {
  status: number;
  message: string;
  data: any;
}

axios.interceptors.response.use(
  (res) => {
    return {
      ...res.data,
    };
  },
  (err) => {
    return Promise.reject(err.response.data);
  }
);

class Http {
  post(path: string, body: any, option?: any) {
    return axios.post<any, IResponse>(path, body, option);
  }
}

export const http = new Http();
