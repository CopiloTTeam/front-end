import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  // URL LOCAL
  // baseURL: 'http://localhost:8080',
  // PRODUÇÂO
  baseURL: 'http://localhost:8080',
  timeout: 1000,
});

export default api;
