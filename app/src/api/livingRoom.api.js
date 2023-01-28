import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const insertLiving = async (token, eventId, data) => {
    return await axios.post(`${VITE_BACKEND_URL}/living-room/${eventId}`, data, {
        headers:
        {
            "x-access-token": token,
        }
    })
}

export const getLivings = async eventId => {
    return await axios.get(`${VITE_BACKEND_URL}/living-room/${eventId}`)
}