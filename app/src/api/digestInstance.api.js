import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const getDigestInstances = async (token) => {
    return await axios.get(`${VITE_BACKEND_URL}/digest-instance`, {
        headers:
        {
            "x-access-token": token,
        }
    })
}