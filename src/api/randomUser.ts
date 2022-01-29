import { message } from "antd";
import axiosInstance from "./request";

interface RandomUserPayload {
  page?: number;
  results?: number;
}

export interface RandomUserResponse {
  id: {
    name: string;
    value: string;
  };
  dob: {
    age: number;
    date: string;
  };
  location: {
    city: string;
    country: string;
    state: string;
  };
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  phone: string;
  picture: {
    large: string;
  };
}

interface RandomUser {
  getRandomUser: ({
    page,
    results,
  }: RandomUserPayload) => Promise<{ results: RandomUserResponse[] }>;
}

const randomUser: RandomUser = {
  getRandomUser: async ({ page = 1, results = 25 }) => {
    try {
      const data = axiosInstance.get(
        `?seed=lll&page=${page}&results=${results}`
      );
      return (await data).data;
    } catch (err) {
      message.warn((err as any).message);
      return err;
    }
  },
};

export default randomUser;
