import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const getPayments = async (token) => {
    return await axios.get(`${VITE_BACKEND_URL}/payment-instance`, {
        headers:
        {
            "x-access-token": token,
        }
    })
}

export const updatePayments = async (token, paymentId) => {
    return await axios.put(`${VITE_BACKEND_URL}/payment-instance/${paymentId}`, {}, {
        headers:
        {
            "x-access-token": token,
        }
    })
}