// src/services/unsplash.js
// import axios from 'axios';
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';

const unsplash = createApi({
  accessKey: 'pXPYu1xrwaOyiDQl0WSlbswKuInHPe3yl7880M9wQBg',
  fetch: nodeFetch,
});

export default unsplash;
