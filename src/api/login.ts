import { message } from "antd";
import axiosInstance from "./request";

export interface LogiResponse {
  login: {
    md5: string;
    password: string; //"seinfeld"
    salt: string;
    sha1: string;
    sha256: string;
    username: string; //"beautifultiger295"
    uuid: string;
  };
}

interface Login {
  login: () => Promise<LogiResponse>;
}

const login: Login = {
  login: async () => {
    try {
      const data = axiosInstance.get(`?seed=lll`);
      return (await data).data?.results?.[0];
    } catch (err) {
      message.warn((err as any).message);
      return err;
    }
  },
};

export default login;
