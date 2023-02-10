import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const setDigestInstance = async (token, data) => {
    return await axios.post(`${VITE_BACKEND_URL}/digest-instance/`, data, {
        headers:
            { "x-access-token": token }
    })
}
