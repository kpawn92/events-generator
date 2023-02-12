import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const upload = async (token, file) => {
    const formData = new FormData();
    formData.append("file", file);

    return await axios.post(`${VITE_BACKEND_URL}/job/upload`, formData, {
        headers:
            { "x-access-token": token }
    })
}

export const updateJob = async (token, data) => {

    return await axios.patch(`${VITE_BACKEND_URL}/job`, data, {
        headers:
            { "x-access-token": token }
    })
}