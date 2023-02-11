import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const setPayment = async (token, data) => {
    return await axios.post(`${VITE_BACKEND_URL}/payment-instance/`, data, {
        headers:
            { "x-access-token": token }
    })
}

export const getPayment = async (token) => {
    return await axios.get(`${VITE_BACKEND_URL}/payment-instance/get/state`, {
        headers:
            { "x-access-token": token }
    })
}