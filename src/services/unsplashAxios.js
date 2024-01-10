import axios from 'axios';

const unsplashAxios = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id: 'pXPYu1xrwaOyiDQl0WSlbswKuInHPe3yl7880M9wQBg',
  },
  headers: {
    Authorization: `Bearer DIUsW1AhGo7Iux9-QvvBG2ksensfw9XNqs-NYGvbG5M`,
  },
});

export default unsplashAxios;
