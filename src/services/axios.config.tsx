import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  // URL LOCAL
  // baseURL: 'http://localhost:8080',
  // PRODUÇÂO
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 1000,
   maxRedirects: 10
});

export const addAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `${token}`;
    // printe alguma resposta 
    // console.log(api.defaults.headers.common['Authorization']);
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
