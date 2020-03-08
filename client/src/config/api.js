import axios from 'axios';

export const API = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  timeout: 10000,
});

export const setHeaderAuth = token => {
  API.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};