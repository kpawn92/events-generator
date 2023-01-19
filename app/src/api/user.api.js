import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';

export const getUser = async (token) => {
    return await axios.get(`${VITE_BACKEND_URL}/users/user`, {
        headers:
            { "x-access-token": token }
    })
}

export const getUserByRole = async (token, role) => {
    return await axios.get(`${VITE_BACKEND_URL}/users/get/${role}`, {
        headers:
            { "x-access-token": token }
    })
}


