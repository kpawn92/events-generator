import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const sigIn = async (data) => {
    return await axios.post(`${VITE_BACKEND_URL}/auth/signin`, data)
}

export const sigUp = async (data) => {
    return await axios.post(`${VITE_BACKEND_URL}/auth/signup`, data)
}
