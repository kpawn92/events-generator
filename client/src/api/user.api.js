import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const getSubs = async (data) => {
    return await axios.get(`${VITE_BACKEND_URL}/users/open/subs`, data)
}
