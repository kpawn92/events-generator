import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const insertEvent = async (token, data) => {
    return await axios.post(`${VITE_BACKEND_URL}/events`, data, {
        headers:
        {
            "x-access-token": token,
        }
    })
}

export const getEvents = async () => {
    return await axios.get(`${VITE_BACKEND_URL}/events`, {
        headers:
        {
            'usuario-advanced': 'moderator',
        }
    })
}