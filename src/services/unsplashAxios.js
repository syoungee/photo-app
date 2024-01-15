import axios from 'axios';

const unsplashAxios = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id: process.env.REACT_APP_ACCESS_KEY,
  },
  headers: {
    Authorization: `Bearer `+ process.env.REACT_APP_BEARER_TOKEN,
  },
});

export default unsplashAxios;
