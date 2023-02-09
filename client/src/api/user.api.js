import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const getSubscriber = async (token) => {
    return await axios.get(`${VITE_BACKEND_URL}/users/open/subs`, {
        headers:
            { "x-access-token": token }
    })
}
