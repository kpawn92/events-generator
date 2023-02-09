import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const signIn = async (data) => {
    return await axios.post(`${VITE_BACKEND_URL}/auth/signin`, data)
}

export const signUp = async (data) => {
    return await axios.post(`${VITE_BACKEND_URL}/auth/signup`, data)
}
