import axios from 'axios';

const baseURL =
  process.env.REACT_APP_API_BASE_URL?.trim() || 'http://localhost:3001/api';

export const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});
