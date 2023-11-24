import axios from 'axios';
import authStorageService from "@/components/Features/user/store/authStorage";

const instance = axios.create({
    baseURL:"http://localhost:9000/api"
})


instance.interceptors.request.use(
    config => {
    console.log(config);
        if (config.url !== '/login' && config.url !== '/register') {
            const token = authStorageService.getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // instance.interceptors.response.use(
  //   response => {
  //   console.log(response);

  //     return response;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // );

export default instance;



