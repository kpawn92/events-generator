import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const getEvent = async () => {
    return await axios.get(`${VITE_BACKEND_URL}/events`)
}
