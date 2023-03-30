import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  // URL LOCAL
  // baseURL: 'http://localhost:8080',
  // PRODUÇÂO
  baseURL: 'https://back-end-production-bdba.up.railway.app',
  timeout: 1000,
});

export default api;
