import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const getLiving = async (eventId) => {
    return await axios.get(`${VITE_BACKEND_URL}/living-room/${eventId}`)
}
