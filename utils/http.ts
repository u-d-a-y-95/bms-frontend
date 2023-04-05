import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

class Http {
  post(path: string, body: any, option?: any) {
    return axios.post(path, body, option);
  }
}

export const http = new Http();
