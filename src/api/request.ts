import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://randomuser.me/api/",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error?.response;
    if (status === 401) {
      //removeAuthToken();
      window.location.replace("/login");
      return;
    }
    //message error code
  }
);

export default axiosInstance;
