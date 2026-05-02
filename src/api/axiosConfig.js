import axios from 'axios';

export const BASE_API_URL = 'https://fsadfinalbackend-production.up.railway.app';

const API = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default API;
